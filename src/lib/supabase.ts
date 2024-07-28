import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://fhbotpanwixlquzcxvpm.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZoYm90cGFud2l4bHF1emN4dnBtIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTYzMzEyODcsImV4cCI6MjAzMTkwNzI4N30.tu__cMNy8oGSGWGfLZ0pf51SjvG0UYKDypVArg5UzgE'

export const supabase = createClient(supabaseUrl, supabaseKey)
