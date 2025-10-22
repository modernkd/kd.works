// Mock utilities for Storybook to avoid network dependencies

// Mock Supabase client
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

// Mock PartyKit socket
export class MockPartySocket {
  addEventListener = () => {};
  send = () => {};
  close = () => {};
}

// Mock localStorage
export const mockLocalStorage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {},
  clear: () => {},
};

// Mock Howl (audio)
export const mockHowl = class {
  constructor() {}
  play = () => {};
  pause = () => {};
  stop = () => {};
};

// Mock navigator.onLine
export const mockNavigator = {
  onLine: true,
};

// Mock sample data
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

export const mockUsers = [
  { id: 'user1', name: 'Alice' },
  { id: 'user2', name: 'Bob' },
  { id: 'user3', name: 'Charlie' },
];

export const mockCustomSounds = {};

// Mock environment variables for Storybook
export const mockEnv = {
  VITE_SUPABASE_URL: 'https://mock-supabase-url.supabase.co',
  VITE_SUPABASE_ANON_KEY: 'mock-anon-key',
};
