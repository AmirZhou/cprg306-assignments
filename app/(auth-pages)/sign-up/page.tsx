import {
  signUpAction,
  signInAction,
  signInWithGitHubAction,
} from "@/app/(auth-pages)/actions";
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import GithubIcon from "@/components/Icons/GithubIcon";
import Link from "next/link";

export default async function SignUp(props: {
  searchParams: Promise<Message>;
}) {
  const searchParams = await props.searchParams;
  if ("message" in searchParams) {
    return (
      <div className="flex h-screen w-full flex-1 items-center justify-center gap-2 p-4 sm:max-w-md">
        <FormMessage message={searchParams} />
      </div>
    );
  }

  return (
    <>
      <form className="flex w-96 flex-col">
        <h1 className="text-2xl font-medium">Create your free account</h1>
        <p className="text-secondary-foreground">Connet to week9 with:</p>
        <SubmitButton
          className="mt-4"
          pendingText="Signing In..."
          formAction={signInWithGitHubAction}
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
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            name="password"
            placeholder="Your password"
            minLength={6}
            required
          />
          <SubmitButton
            variant="outline"
            className="border border-gray-300"
            formAction={signUpAction}
            pendingText="Signing up..."
          >
            Sign up
          </SubmitButton>
          <FormMessage message={searchParams} />
        </div>
        <p className="text text-sm text-foreground">
          Already have an account?{" "}
          <Link className="font-medium text-link underline" href="/sign-in">
            Sign in
          </Link>
        </p>
      </form>
    </>
  );
}
