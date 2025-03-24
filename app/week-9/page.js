import { createClient } from '@supabase/supabase-js'
import { Auth } from '@supabase/auth-ui-react'

export default function Page() {
  return (
    <div className="w-full min-h-screen flex items-start pt-20 justify-center bg-slate-50 font-poppins">
      <h1 className="text-4xl">Week 9</h1>
      <p>Only logged in users can see this.</p>
      <Auth supabaseClient={createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY)} />
    </div>
  )
}