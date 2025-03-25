import { signOutAction } from "@/app/(auth-pages)/actions";
import { createClient } from "@/utils/supabase/server";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { hasEnvVars } from "@/utils/supabase/check-env-vars";

export default async function HeaderAuth() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!hasEnvVars)
    return (
      <div className="flex gap-2">
        <Button
          asChild
          size="sm"
          variant="outline"
          disabled
          className="pointer-events-none cursor-none opacity-75"
        >
          <Link href="/sign-in">Sign in</Link>
        </Button>
        <Button
          asChild
          size="sm"
          variant="default"
          disabled
          className="pointer-events-none cursor-none opacity-75"
        >
          <Link href="/sign-in">Sign up</Link>
        </Button>
      </div>
    );

  return user ? (
    <div className="flex items-center justify-end gap-4">
      Hello, {user.email}!
      <form action={signOutAction}>
        <Button type="submit" variant="outline">
          Sign out
        </Button>
      </form>
    </div>
  ) : (
    <div className="flex items-center justify-end gap-2">
      <Button asChild variant="outline" size="sm">
        <Link href="/sign-in">Sign in</Link>
      </Button>
      <Button asChild variant="default" size="sm">
        <Link href="/sign-up">Sign up</Link>
      </Button>
    </div>
  );
}
