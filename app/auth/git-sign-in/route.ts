import { NextResponse, NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { cookies } from "next/headers";

export async function GET(request: NextRequest) {
  const cookieStore = await cookies();
  console.log("Cookies beforeSingIn:", cookieStore.getAll());

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) =>
            cookieStore.set(name, value, options),
          );
        },
      },
    },
  );
  const origin = process.env.NEXT_PUBLIC_APP_URL;

  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: `${origin}/auth/callback`,
    },
  });

  if (error) {
    console.error("GitHub sign-in error:", error);
    return NextResponse.redirect(
      `${origin}/sign-up?error=${encodeURIComponent(error.message)}`,
    );
  }
  console.log("Redirecting to:", data.url);
  console.log("Cookies AfterSingIn:", cookieStore.getAll());
  const response = NextResponse.redirect(data.url);
  return response;
}
