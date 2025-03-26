import { createClient } from "@/utils/supabase/server";
import { NextResponse } from "next/server";

// The `/auth/callback` route is required for the server-side auth flow implemented
// by the SSR package. It exchanges an auth code for the user's session.
// https://supabase.com/docs/guides/auth/server-side/nextjs
export async function GET(request: Request) {
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const origin = requestUrl.origin;
  const redirectTo = requestUrl.searchParams.get("redirect_to")?.toString();
  if (code) {
    try {
      const supabase = await createClient();
      const { data, error } = await supabase.auth.exchangeCodeForSession(code);
      if (error) throw error;
      const response = NextResponse.redirect(`${origin}/week-9/secure`);
    } catch (error) {
      console.error("Exchange error:", error.message);
      return NextResponse.redirect(
        `${origin}/sign-in?error=${encodeURIComponent(error.message)}`,
      );
    }
  }
  // if (redirectTo) {
  //   return NextResponse.redirect(`${origin}${redirectTo}`);
  // }
  // URL to redirect to after sign up process completes
  // no code case
  // return NextResponse.redirect(`${origin}/sign-in`);

  // if (code) {
  //   try {
  //     const { data, error } = await supabase.auth.exchangeCodeForSession(code);
  //     if (error) throw error;

  //     const response = NextResponse.redirect(`${origin}/week-9/secure`);
  //     return response;
  //   } catch (error) {
  //     console.error("Exchange error:", error.message);
  //     return NextResponse.redirect(
  //       `${origin}/sign-in?error=${encodeURIComponent(error.message)}`,
  //     );
  //   }
  // }
}
