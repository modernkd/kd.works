import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { authApi } from '../lib/api';
import { queryKeys } from '../lib/queryKeys';

export const useCurrentUser = () => {
  return useQuery({
    queryKey: queryKeys.auth.currentUser,
    queryFn: async () => {
      const response = await authApi.getCurrentUser();
      if (!response.success) {
        throw new Error(response.error || 'Failed to fetch user');
      }
      return response.data?.user;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
  });
};

export const useSignIn = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ email, redirectTo }: { email: string; redirectTo: string }) => {
      const response = await authApi.signIn(email, redirectTo);
      if (!response.success) {
        throw new Error(response.error || 'Failed to sign in');
      }
      return response.data;
    },
    onSuccess: () => {
      // Invalidate current user query to refetch after sign in
      queryClient.invalidateQueries({ queryKey: queryKeys.auth.currentUser });
    },
  });
};

export const useSignOut = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      const response = await authApi.signOut();
      if (!response.success) {
        throw new Error(response.error || 'Failed to sign out');
      }
      return response.data;
    },
    onSuccess: () => {
      // Clear all cached data on sign out
      queryClient.clear();
    },
  });
};
