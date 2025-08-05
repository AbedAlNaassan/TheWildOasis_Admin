import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://hdyoezdeaxgtwpnvofxw.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhkeW9lemRlYXhndHdwbnZvZnh3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQxOTgyODIsImV4cCI6MjA2OTc3NDI4Mn0.8B0wzgyTmvwia-ekHECUo6Q63Dugq4_Q0SpIOBDqJmU";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
