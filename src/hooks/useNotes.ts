import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { notesApi } from '../lib/api';
import { queryKeys } from '../lib/queryKeys';
import { NewNote, Note } from '../db/schema';

/**
 * Hook to fetch all approved notes.
 * @returns {import('@tanstack/react-query').UseQueryResult<Note[], Error>} Query object with approved notes data, loading state, and error state.
 */
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

/**
 * Hook to fetch all pending notes.
 * @returns {import('@tanstack/react-query').UseQueryResult<Note[], Error>} Query object with pending notes data, loading state, and error state.
 */
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

/**
 * Hook to fetch all notes regardless of status.
 * @returns {import('@tanstack/react-query').UseQueryResult<Note[], Error>} Query object with all notes data, loading state, and error state.
 */
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

/**
 * Hook to create a new note.
 * @param {NewNote} noteData - The data for the new note to create.
 * @returns {import('@tanstack/react-query').UseMutationResult<Note, Error, NewNote>} Mutation object with create function, loading state, and error state.
 */
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
      queryClient.invalidateQueries({ queryKey: queryKeys.notes.pending });
    },
  });
};
/**
 * Hook to approve a pending note.
 * @param {number} noteId - The ID of the note to approve.
 * @returns {import('@tanstack/react-query').UseMutationResult<Note, Error, number>} Mutation object with approve function, loading state, and error state.
 */
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
      queryClient.invalidateQueries({ queryKey: queryKeys.notes.pending });
      queryClient.invalidateQueries({ queryKey: queryKeys.notes.approved });
      queryClient.invalidateQueries({ queryKey: queryKeys.notes.all });
    },
    onMutate: async (noteId: number) => {
      await queryClient.cancelQueries({ queryKey: queryKeys.notes.pending });
      await queryClient.cancelQueries({ queryKey: queryKeys.notes.approved });

      const previousPendingNotes = queryClient.getQueryData(queryKeys.notes.pending);
      const previousApprovedNotes = queryClient.getQueryData(queryKeys.notes.approved);

      queryClient.setQueryData(queryKeys.notes.pending, (old: Note[] | undefined) => {
        return old?.filter((note) => note.id !== noteId) || [];
      });

      queryClient.setQueryData(queryKeys.notes.approved, (old: Note[] | undefined) => {
        const pendingNotes = queryClient.getQueryData(queryKeys.notes.pending) as Note[] | undefined;
        const noteToApprove = pendingNotes?.find((note) => note.id === noteId);
        if (noteToApprove) {
          const approvedNote = { ...noteToApprove, status: 'approved' as const, approvedAt: new Date().toISOString() };
          return [...(old || []), approvedNote];
        }
        return old || [];
      });

      return { previousPending: previousPendingNotes, previousApproved: previousApprovedNotes };
    },
    onError: (err, noteId, context) => {
      if (context?.previousPending) {
        queryClient.setQueryData(queryKeys.notes.pending, context.previousPending);
      }
      if (context?.previousApproved) {
        queryClient.setQueryData(queryKeys.notes.approved, context.previousApproved);
      }
    },
  });
};

/**
 * Hook to reject a pending note.
 * @param {number} noteId - The ID of the note to reject.
 * @returns {import('@tanstack/react-query').UseMutationResult<Note, Error, number>} Mutation object with reject function, loading state, and error state.
 */
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
      queryClient.invalidateQueries({ queryKey: queryKeys.notes.pending });
      queryClient.invalidateQueries({ queryKey: queryKeys.notes.all });
    },
    onMutate: async (noteId: number) => {
      await queryClient.cancelQueries({ queryKey: queryKeys.notes.pending });

      const previousPendingNotes = queryClient.getQueryData(queryKeys.notes.pending);

      queryClient.setQueryData(queryKeys.notes.pending, (old: Note[] | undefined) => {
        return old?.filter((note) => note.id !== noteId) || [];
      });

      return { previousPending: previousPendingNotes };
    },
    onError: (err, noteId, context) => {
      if (context?.previousPending) {
        queryClient.setQueryData(queryKeys.notes.pending, context.previousPending);
      }
    },
  });
};

/**
 * Hook to delete a note.
 * @param {number} noteId - The ID of the note to delete.
 * @returns {import('@tanstack/react-query').UseMutationResult<Note, Error, number>} Mutation object with delete function, loading state, and error state.
 */
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
      queryClient.invalidateQueries({ queryKey: queryKeys.notes.all });
      queryClient.invalidateQueries({ queryKey: queryKeys.notes.pending });
      queryClient.invalidateQueries({ queryKey: queryKeys.notes.approved });
    },
    onMutate: async (noteId: number) => {
      await queryClient.cancelQueries({ queryKey: queryKeys.notes.pending });
      await queryClient.cancelQueries({ queryKey: queryKeys.notes.approved });

      const previousPendingNotes = queryClient.getQueryData(queryKeys.notes.pending);
      const previousApprovedNotes = queryClient.getQueryData(queryKeys.notes.approved);

      queryClient.setQueryData(queryKeys.notes.pending, (old: Note[] | undefined) => {
        return old?.filter((note) => note.id !== noteId) || [];
      });
      queryClient.setQueryData(queryKeys.notes.approved, (old: Note[] | undefined) => {
        return old?.filter((note) => note.id !== noteId) || [];
      });

      return { previousPending: previousPendingNotes, previousApproved: previousApprovedNotes };
    },
    onError: (err, noteId, context) => {
      if (context?.previousPending) {
        queryClient.setQueryData(queryKeys.notes.pending, context.previousPending);
      }
      if (context?.previousApproved) {
        queryClient.setQueryData(queryKeys.notes.approved, context.previousApproved);
      }
    },
  });
};
