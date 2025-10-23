// Query keys for TanStack Query caching
export const queryKeys = {
  auth: {
    currentUser: ['auth', 'currentUser'] as const,
  },
  notes: {
    all: ['notes'] as const,
    approved: ['notes', 'approved'] as const,
    pending: ['notes', 'pending'] as const,
    lists: () => [...queryKeys.notes.all, 'list'] as const,
    list: (filters: Record<string, unknown>) => [...queryKeys.notes.lists(), filters] as const,
    details: () => [...queryKeys.notes.all, 'detail'] as const,
    detail: (id: number) => [...queryKeys.notes.details(), id] as const,
  },
} as const;
