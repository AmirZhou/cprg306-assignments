import { createServerClient } from "@supabase/ssr";
import { type NextRequest, NextResponse } from "next/server";

export const updateSession = async (request: NextRequest) => {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value),
          );
          response = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options),
          );
        },
      },
    },
  );

  // This will refresh session if expired - required for Server Components
  // https://supabase.com/docs/guides/auth/server-side/nextjs
  const user = await supabase.auth.getUser();
  // https://supabase.com/docs/reference/javascript/auth-getuser
  // this user's shape is crazy you need to check it out

  console.log("Middleware: trying to adentify the user:");
  console.log(user);

  if (request.nextUrl.pathname.startsWith("/week-9/secure") && user.error) {
    console.log("redirecting to singin, from middleware. the request.url is:");
    console.log(request.url);
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }
  
  return response;
};
