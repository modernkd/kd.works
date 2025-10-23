import { createClient } from '@supabase/supabase-js';
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;
if (!supabaseUrl || !supabaseAnonKey) {
  console.error('Missing Supabase environment variables');
  throw new Error('Missing Supabase environment variables');
}
// Create Supabase client with auth configuration
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
  },
});
console.log('Supabase client created successfully');
console.log('Current origin for auth redirects:', window.location.origin);
// Listen for auth state changes and log them
supabase.auth.onAuthStateChange((event, session) => {
  var _a;
  console.log(
    'Auth state change:',
    event,
    (_a = session === null || session === void 0 ? void 0 : session.user) === null || _a === void 0 ? void 0 : _a.email,
    'redirected from:',
    document.referrer
  );
});
// Test connection
supabase
  .from('notes')
  .select('count')
  .limit(1)
  .then((result) => {
    if (result.error) {
      console.error('Supabase connection test failed:', result.error);
    } else {
      console.log('Supabase connection test successful');
    }
  });
