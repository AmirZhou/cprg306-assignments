import { type NextRequest, NextResponse } from "next/server";
// import { createClient } from "@/utils/supabase/server";
import { createClient } from "@/utils/supabase/server";

// The `/auth/callback` route is required for the server-side auth flow implemented
// by the SSR package. It exchanges an auth code for the user's session.
// https://supabase.com/docs/guides/auth/server-side/nextjs
export async function GET(request: NextRequest) {
  console.log("Callback route hit:", request.url);
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  const origin = requestUrl.origin;
  const redirectTo = requestUrl.searchParams.get("redirect_to")?.toString();

  const supabase = await createClient();

  if (code) {
    try {
      const { data, error } = await supabase.auth.exchangeCodeForSession(code);
      if (error) throw error;

      const response = NextResponse.redirect(`${origin}/week-9/secure`);
      // if (data.session) {
      //   response.cookies.set("sb-access-token", data.session.access_token, {
      //     path: "/",
      //     httpOnly: true,
      //     secure: process.env.NODE_ENV === "production",
      //   });
      //   response.cookies.set("sb-refresh-token", data.session.refresh_token, {
      //     path: "/",
      //     httpOnly: true,
      //     secure: process.env.NODE_ENV === "production",
      //   });
      // }
      return response;
    } catch (error) {
      console.error("Exchange error:", error.message);
      return NextResponse.redirect(
        `${origin}/sign-in?error=${encodeURIComponent(error.message)}`,
      );
    }
  }

  // no code case
  return NextResponse.redirect(`${origin}/sign-in`);
}
