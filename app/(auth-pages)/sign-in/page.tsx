import { signInAction } from "@/app/(auth-pages)/actions";
import { SubmitButton } from "@/components/submit-button";
import { FormMessage, Message } from "@/components/form-message";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import GithubIcon from "@/components/Icons/GithubIcon";
import Link from "next/link";

export default async function Login(props: { searchParams: Promise<Message> }) {
  const searchParams = await props.searchParams;

  return (
    <>
      <form className="flex w-96 flex-col">
        <h1 className="text-2xl font-medium">Log into your account</h1>
        <p className="text-secondary-foreground">Connet to week9 with:</p>
        <SubmitButton
          className="mt-4"
          pendingText="Signing In..."
          formAction={signInAction}
        >
          <GithubIcon fill="#000000" />
          <span className="ml-1">Github</span>
        </SubmitButton>
        {/* divider */}
        <div className="mt-4 flex items-center gap-4">
          <div className="flex-1 border-t border-gray-300"></div>
          <p className="text-sm text-secondary-foreground">
            Or continue with Email
          </p>
          <div className="flex-1 border-t border-gray-300"></div>
        </div>
        {/* divider end*/}
        <div className="mt-8 flex flex-col gap-2 [&>input]:mb-3">
          <Label htmlFor="email">Email</Label>
          <Input name="email" placeholder="you@example.com" required />
          <div className="flex items-center justify-between">
            <Label htmlFor="password">Password</Label>
            <Link
              className="text-xs text-link underline"
              href="/forgot-password"
            >
              Forgot Password?
            </Link>
          </div>
          <Input
            type="password"
            name="password"
            placeholder="Your password"
            required
          />
          <SubmitButton
            pendingText="Signing In..."
            formAction={signInAction}
            variant="outline"
            className="border border-gray-300"
          >
            Sign in
          </SubmitButton>
          <FormMessage message={searchParams} />
        </div>
        <p className="text-sm text-foreground">
          Don&apos;t have an account?{" "}
          <Link className="font-medium text-link underline" href="/sign-up">
            Sign up
          </Link>
        </p>
      </form>
    </>
  );
}
