import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  'https://rdrxkmlfkstywgofgwbu.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJkcnhrbWxma3N0eXdnb2Znd2J1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTk1MjQyNTcsImV4cCI6MjAzNTEwMDI1N30.fkvymrNCtb8yQUQfsJiEU_Z53HdmbtW9hbK57P-_AR0'
)
