import Link from "next/link";
import InputField from "./InputField";
import PasswordField from "./PasswordField";

interface SignInProps {}

const SignIn = (props: SignInProps) => {
  return (
    <div className="m-auto max-w-md">
      <div className="p-4 text-white md:p-16">
        <p className="mt-4 mb-8 text-4xl font-medium">Sign In</p>

        <form className="flex flex-col gap-4" noValidate>
          <InputField />
          <PasswordField />

          <button
            type="submit"
            className="mt-7 w-full rounded bg-monza-600 py-4 font-medium"
          >
            Sign In
          </button>

          <div className="inline-flex items-center justify-between text-xs  text-stone-400">
            <div className="inline-flex items-center gap-1">
              <input
                type="checkbox"
                id="remember-me"
                className="h-4 w-4 rounded accent-zinc-600"
              />
              <label htmlFor="remember-me">Remember me</label>
            </div>

            <a href="#">Need help?</a>
          </div>

          <div className="text-stone-400">
            <p>
              New to Netflix?{" "}
              <Link href="/login" className="text-white">
                Sign up now.
              </Link>
            </p>
            <p className="mt-3 text-xs">
              This page is protected by Google reCAPTCHA to ensure you're not a
              bot.{" "}
              <a href="#" className="text-blue-600">
                Learn more.
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
