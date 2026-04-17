import { createBrowserClient } from '@supabase/ssr';

export function createClient() {
  // Using generic mock keys so the app doesn't crash on build if env vars are missing
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://mock-project.supabase.co';
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'mock-anon-key';

  return createBrowserClient(supabaseUrl, supabaseKey);
}
