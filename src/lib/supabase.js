import { createClient } from '@supabase/supabase-js';

const defaultSupabaseUrl = 'https://mdwylezviqvrexufoizv.supabase.co';
const defaultSupabaseKey = 'sb_publishable_MXKz66YNrNex-fCgPnsGrw_6OGk5Ele';

const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL ||
  import.meta.env.SUPABASE_URL ||
  import.meta.env.NEXT_PUBLIC_SUPABASE_URL ||
  defaultSupabaseUrl;

const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  import.meta.env.SUPABASE_ANON_KEY ||
  import.meta.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
  import.meta.env.SUPABASE_KEY ||
  import.meta.env.VITE_SUPABASE_KEY ||
  defaultSupabaseKey;

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;
