import { NextResponse, NextRequest } from "next/server";
import { createClient } from "@/utils/supabase/server";

export async function GET(request: NextRequest) {
  const supabase = await createClient();
  const origin = process.env.NEXT_PUBLIC_APP_URL;

  // cookieStore.delete("sb-ckwhxpplgakfccbrazeo-auth-token-code-verifier");

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
  const response = NextResponse.redirect(data.url);
  return response;
}
