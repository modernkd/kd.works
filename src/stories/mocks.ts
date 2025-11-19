/**
 * Mock Supabase client for Storybook testing.
 * Provides fake implementations of Supabase auth and database methods.
 */
export const mockSupabase = {
  auth: {
    getUser: async () => ({ data: { user: null }, error: null }),
    signInWithOtp: async () => ({ error: null }),
    signOut: async () => {},
    onAuthStateChange: () => ({
      data: { subscription: { unsubscribe: () => {} } },
    }),
  },
  from: () => ({
    select: () => ({
      order: () => ({
        eq: () => ({
          data: [],
          error: null,
        }),
      }),
      data: [],
      error: null,
    }),
    update: () => ({
      set: () => ({
        eq: () => ({
          error: null,
        }),
      }),
    }),
    delete: () => ({
      eq: () => ({
        error: null,
      }),
    }),
  }),
};

/**
 * Mock PartyKit WebSocket class for Storybook testing.
 * Provides fake implementations of WebSocket methods.
 */
export class MockPartySocket {
  addEventListener = () => {};
  send = () => {};
  close = () => {};
}

/**
 * Mock localStorage API for Storybook testing.
 * Provides fake implementations of localStorage methods.
 */
export const mockLocalStorage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {},
  clear: () => {},
};

/**
 * Mock navigator API for Storybook testing.
 * Provides fake implementations of navigator properties.
 */
export const mockNavigator = {
  onLine: true,
};

/**
 * Mock notes data for Storybook testing.
 * Contains sample contact form submissions with different statuses.
 */
export const mockNotes = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    title: 'Great portfolio!',
    message: 'Love the interactive elements.',
    status: 'approved',
    created_at: '2024-01-01T00:00:00Z',
    approved_at: '2024-01-02T00:00:00Z',
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    title: 'Question about tech stack',
    message: 'What framework did you use?',
    status: 'pending',
    created_at: '2024-01-03T00:00:00Z',
  },
];

/**
 * Mock users data for Storybook testing.
 * Contains sample user objects for real-time features.
 */
export const mockUsers = [
  { id: 'user1', name: 'Alice' },
  { id: 'user2', name: 'Bob' },
  { id: 'user3', name: 'Charlie' },
];

/**
 * Mock custom sounds data for Storybook testing.
 * Currently empty but structured for future custom sound testing.
 */
export const mockCustomSounds = {};

/**
 * Mock environment variables for Storybook testing.
 * Provides fake Supabase configuration values.
 */
export const mockEnv = {
  VITE_SUPABASE_URL: 'https://mock-supabase-url.supabase.co',
  VITE_SUPABASE_ANON_KEY: 'mock-anon-key',
};
