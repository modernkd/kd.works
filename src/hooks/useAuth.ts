import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { authApi } from '../lib/api';
import { queryKeys } from '../lib/queryKeys';

/**
 * Hook to fetch the current authenticated user.
 * @returns {import('@tanstack/react-query').UseQueryResult} Query object with user data, loading state, and error state.
 */
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

/**
 * Hook to sign in a user with email and redirect URL.
 * @param {{email: string; redirectTo: string}} params - The sign-in parameters.
 * @param {string} params.email - The user's email address.
 * @param {string} params.redirectTo - The URL to redirect after sign-in.
 * @returns {import('@tanstack/react-query').UseMutationResult<{success: boolean; data?: any; error?: string}, Error, {email: string; redirectTo: string}>} Mutation object with sign-in function, loading state, and error state.
 */
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
      queryClient.invalidateQueries({ queryKey: queryKeys.auth.currentUser });
    },
  });
};
/**
 * Hook to sign out the current user.
 * @returns {import('@tanstack/react-query').UseMutationResult} Mutation object with sign-out function, loading state, and error state.
 */
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
      queryClient.clear();
    },
  });
};
