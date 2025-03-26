import { createServerClient } from "@supabase/ssr";

import { cookies } from "next/headers";
// https://nextjs.org/docs/app/api-reference/functions/cookies
// cookies is an async function that allows you to read the HTTP incoming request cookies in Server Components, and read/write outgoing request cookies in Server Actions or Route Handlers.
// - waht is a server action tho.
// - - A Next.js feature (introduced in App Router) that lets you define server-side functions callable from the client via a "use server" directive. They run on the server, can modify cookies or headers, and are typically used for form submissions or mutations. Example:

export async function createClient() {
  const cookieStore = await cookies();
  console.log("Cookie Store in server-client");
  console.log(cookieStore);
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options),
            );
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    },
  );
}
