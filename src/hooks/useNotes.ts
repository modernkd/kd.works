import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { notesApi } from '../lib/api';
import { queryKeys } from '../lib/queryKeys';
import { NewNote, Note } from '../db/schema';

export const useApprovedNotes = () => {
  return useQuery({
    queryKey: queryKeys.notes.approved,
    queryFn: async () => {
      const response = await notesApi.getApproved();
      if (!response.success) {
        throw new Error(response.error || 'Failed to fetch approved notes');
      }
      return response.data?.notes || [];
    },
    staleTime: 2 * 60 * 1000, // 2 minutes for approved notes
  });
};

export const usePendingNotes = () => {
  return useQuery({
    queryKey: queryKeys.notes.pending,
    queryFn: async () => {
      const response = await notesApi.getPending();
      if (!response.success) {
        throw new Error(response.error || 'Failed to fetch pending notes');
      }
      return response.data?.notes || [];
    },
    staleTime: 1 * 60 * 1000, // 1 minute for pending notes (more dynamic)
  });
};

export const useAllNotes = () => {
  return useQuery({
    queryKey: queryKeys.notes.all,
    queryFn: async () => {
      const response = await notesApi.getAll();
      if (!response.success) {
        throw new Error(response.error || 'Failed to fetch all notes');
      }
      return response.data?.notes || [];
    },
    staleTime: 1 * 60 * 1000, // 1 minute
  });
};

export const useCreateNote = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (noteData: NewNote) => {
      const response = await notesApi.create(noteData);
      if (!response.success) {
        throw new Error(response.error || 'Failed to create note');
      }
      return response.data;
    },
    onSuccess: () => {
      // Invalidate approved notes since new notes start as pending
      queryClient.invalidateQueries({ queryKey: queryKeys.notes.pending });
    },
  });
};

export const useApproveNote = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (noteId: number) => {
      const response = await notesApi.approve(noteId);
      if (!response.success) {
        throw new Error(response.error || 'Failed to approve note');
      }
      return response.data;
    },
    onSuccess: () => {
      // Invalidate both pending and approved notes
      queryClient.invalidateQueries({ queryKey: queryKeys.notes.pending });
      queryClient.invalidateQueries({ queryKey: queryKeys.notes.approved });
      queryClient.invalidateQueries({ queryKey: queryKeys.notes.all });
    },
    onMutate: async (noteId: number) => {
      // Cancel outgoing refetches
      await queryClient.cancelQueries({ queryKey: queryKeys.notes.pending });
      await queryClient.cancelQueries({ queryKey: queryKeys.notes.approved });

      // Snapshot previous values
      const previousPending = queryClient.getQueryData(queryKeys.notes.pending);
      const previousApproved = queryClient.getQueryData(queryKeys.notes.approved);

      // Optimistically update pending notes (remove the approved note)
      queryClient.setQueryData(queryKeys.notes.pending, (old: Note[] | undefined) => {
        return old?.filter((note) => note.id !== noteId) || [];
      });

      // Optimistically update approved notes (add the approved note)
      queryClient.setQueryData(queryKeys.notes.approved, (old: Note[] | undefined) => {
        const pendingNotes = queryClient.getQueryData(queryKeys.notes.pending) as Note[] | undefined;
        const noteToApprove = pendingNotes?.find((note) => note.id === noteId);
        if (noteToApprove) {
          const approvedNote = { ...noteToApprove, status: 'approved' as const, approvedAt: new Date().toISOString() };
          return [...(old || []), approvedNote];
        }
        return old || [];
      });

      return { previousPending, previousApproved };
    },
    onError: (err, noteId, context) => {
      // Revert optimistic updates on error
      if (context?.previousPending) {
        queryClient.setQueryData(queryKeys.notes.pending, context.previousPending);
      }
      if (context?.previousApproved) {
        queryClient.setQueryData(queryKeys.notes.approved, context.previousApproved);
      }
    },
  });
};

export const useRejectNote = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (noteId: number) => {
      const response = await notesApi.reject(noteId);
      if (!response.success) {
        throw new Error(response.error || 'Failed to reject note');
      }
      return response.data;
    },
    onSuccess: () => {
      // Invalidate pending notes
      queryClient.invalidateQueries({ queryKey: queryKeys.notes.pending });
      queryClient.invalidateQueries({ queryKey: queryKeys.notes.all });
    },
    onMutate: async (noteId: number) => {
      // Cancel outgoing refetches
      await queryClient.cancelQueries({ queryKey: queryKeys.notes.pending });

      // Snapshot previous value
      const previousPending = queryClient.getQueryData(queryKeys.notes.pending);

      // Optimistically update pending notes (remove the rejected note)
      queryClient.setQueryData(queryKeys.notes.pending, (old: Note[] | undefined) => {
        return old?.filter((note) => note.id !== noteId) || [];
      });

      return { previousPending };
    },
    onError: (err, noteId, context) => {
      // Revert optimistic update on error
      if (context?.previousPending) {
        queryClient.setQueryData(queryKeys.notes.pending, context.previousPending);
      }
    },
  });
};

export const useDeleteNote = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (noteId: number) => {
      const response = await notesApi.delete(noteId);
      if (!response.success) {
        throw new Error(response.error || 'Failed to delete note');
      }
      return response.data;
    },
    onSuccess: () => {
      // Invalidate all note queries
      queryClient.invalidateQueries({ queryKey: queryKeys.notes.all });
      queryClient.invalidateQueries({ queryKey: queryKeys.notes.pending });
      queryClient.invalidateQueries({ queryKey: queryKeys.notes.approved });
    },
    onMutate: async (noteId: number) => {
      // Cancel outgoing refetches
      await queryClient.cancelQueries({ queryKey: queryKeys.notes.pending });
      await queryClient.cancelQueries({ queryKey: queryKeys.notes.approved });

      // Snapshot previous values
      const previousPending = queryClient.getQueryData(queryKeys.notes.pending);
      const previousApproved = queryClient.getQueryData(queryKeys.notes.approved);

      // Optimistically remove from both lists
      queryClient.setQueryData(queryKeys.notes.pending, (old: Note[] | undefined) => {
        return old?.filter((note) => note.id !== noteId) || [];
      });
      queryClient.setQueryData(queryKeys.notes.approved, (old: Note[] | undefined) => {
        return old?.filter((note) => note.id !== noteId) || [];
      });

      return { previousPending, previousApproved };
    },
    onError: (err, noteId, context) => {
      // Revert optimistic updates on error
      if (context?.previousPending) {
        queryClient.setQueryData(queryKeys.notes.pending, context.previousPending);
      }
      if (context?.previousApproved) {
        queryClient.setQueryData(queryKeys.notes.approved, context.previousApproved);
      }
    },
  });
};
