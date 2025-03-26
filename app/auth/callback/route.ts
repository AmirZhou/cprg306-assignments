import { NextResponse } from "next/server";
import { createClient } from "@/utils/supabase/server";

// The `/auth/callback` route is required for the server-side auth flow implemented
// by the SSR package. It exchanges an auth code for the user's session.
// https://supabase.com/docs/guides/auth/server-side/nextjs
export async function GET(request: Request) {
  console.log("Callback route hit:", request.url);
  const requestUrl = new URL(request.url);
  const code = requestUrl.searchParams.get("code");
  console.log(code);
  const origin = requestUrl.origin;
  console.log(origin);
  const redirectTo = requestUrl.searchParams.get("redirect_to")?.toString();
  console.log(redirectTo);

  if (code) {
    const supabase = await createClient();
    await supabase.auth.exchangeCodeForSession(code);
    const { data: user } = await supabase.auth.getUser();
    console.log("in the auth/callback, the user is:");
    console.log(user);
  }

  if (redirectTo) {
    console.log("redirectTo exists");
    return NextResponse.redirect(`${origin}${redirectTo}`);
  }

  return NextResponse.redirect(`${origin}/week-9/secure`);
}
