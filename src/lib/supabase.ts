import { createClient } from '@supabase/supabase-js';

/**
 * Supabase URL from environment variables
 */
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;

/**
 * Supabase anonymous key from environment variables
 */
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables');
  throw new Error('Missing Supabase environment variables');
}

/**
 * Configured Supabase client instance
 */
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});

/**
 * Set up authentication state change listener
 */
supabase.auth.onAuthStateChange(() => {
  // Handle authentication state changes
});

/**
 * Test Supabase connection on initialization
 */
supabase
  .from('notes')
  .select('count')
  .limit(1)
  .then((result) => {
    if (result.error) {
      console.error('Supabase connection test failed:', result.error);
    } else {
      // Connection successful
    }
  });
