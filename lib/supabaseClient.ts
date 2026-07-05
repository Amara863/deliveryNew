import { createClient } from '@supabase/supabase-js'

const supabaseUrl: string = 'https://kthfvvkryvpxkdpkfsic.supabase.co'
const supabaseKey: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imt0aGZ2dmtyeXZweGtkcGtmc2ljIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzk3MDMyNTAsImV4cCI6MjA5NTI3OTI1MH0.dZA_6jpZIQgAanU-Hq0ystH5J2yyiagpYqv5FiT_WFQ'

// senior

// const supabaseUrl: string = 'https://xmkefhhhsslwceuvjiwb.supabase.co'
// const supabaseKey: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhta2VmaGhoc3Nsd2NldXZqaXdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI4ODI0NTEsImV4cCI6MjA1ODQ1ODQ1MX0.BTCUVzUKyIqGrWcEG1CRcNU_wm8N1ba3_szPktTpyh8'



export const supabase = createClient(supabaseUrl, supabaseKey)