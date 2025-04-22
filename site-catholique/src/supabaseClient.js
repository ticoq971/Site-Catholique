import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://skjcztzatptkfgnenxjy.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNramN6dHphdHB0a2ZnbmVueGp5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ4NzYwNzUsImV4cCI6MjA2MDQ1MjA3NX0.nprkEhdfloDeP2mPo5cPhFq4dncuqpYMXP4kBs1wovE'

export const supabase = createClient(supabaseUrl, supabaseKey)
