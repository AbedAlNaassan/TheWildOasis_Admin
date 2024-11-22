import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://adinhjvbxnjalogzhveo.supabase.co/";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFkaW5oanZieG5qYWxvZ3podmVvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA2MzE4MDcsImV4cCI6MjA0NjIwNzgwN30.d5ZjGRCvXGzybq04xFRU0x1VE1tBidT9eLd0SgncbLo";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
