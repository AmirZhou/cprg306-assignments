import { signInAction, signUpAction } from "@/app/(auth-pages)/actions";

export default function Login() {
  return (
    <form>
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />
      <button formAction={signInAction}>Log in</button>
      <button formAction={signUpAction}>Sign up</button>
    </form>
  );
}
