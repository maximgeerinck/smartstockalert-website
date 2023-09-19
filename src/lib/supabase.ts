import { createClient } from "@supabase/supabase-js";

const supabaseUrl =
  process.env.NODE_ENV === "production"
    ? "https://iqmtrfjsnvcofqtstrei.supabase.co"
    : "http://192.168.0.219:54321";
const supabaseAnonKey =
  process.env.NODE_ENV === "production"
    ? "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlxbXRyZmpzbnZjb2ZxdHN0cmVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODcxMDAxMjgsImV4cCI6MjAwMjY3NjEyOH0.Ca-JtRLW_2ojOfgajJTJ-hFVrheSP4eEoqLrq8r6FGM"
    : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0";
// const supabaseUrl = "https://iqmtrfjsnvcofqtstrei.supabase.co";
// const supabaseAnonKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlxbXRyZmpzbnZjb2ZxdHN0cmVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODcxMDAxMjgsImV4cCI6MjAwMjY3NjEyOH0.Ca-JtRLW_2ojOfgajJTJ-hFVrheSP4eEoqLrq8r6FGM";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: localStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
