import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import InputField from "./InputField";
import PasswordField from "./PasswordField";

interface Creds {
  email: string;
  password: string;
}

const SignIn = () => {
  const route = useRouter();
  const { register, handleSubmit, getFieldState, formState } = useForm<Creds>({
    mode: "onSubmit",
    shouldFocusError: false,
  });
  const onSubmit: SubmitHandler<Creds> = (e) => {
    route.push("/browse");
  };
  return (
    <div className="m-auto max-w-md flex-1 md:mb-32 md:mt-12">
      <div className="rounded p-4 text-white md:bg-black md:bg-opacity-80 md:p-16 md:pb-14">
        <p className="mt-4 mb-8 text-4xl font-medium">Sign In</p>

        <form
          className="flex flex-col gap-2"
          onSubmit={handleSubmit(onSubmit)}
          autoComplete="new-password"
        >
          <InputField
            register={register("email", {
              required: "Please enter a valid email or phone number.",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Please enter a valid email.",
              },
            })}
            error={getFieldState("email", formState).error?.message}
          />
          <PasswordField
            register={register("password", {
              required:
                "Your password must contain between 4 and 60 characters.",
              minLength: {
                value: 4,
                message:
                  "Your password must contain between 4 and 60 characters.",
              },
              maxLength: {
                value: 60,
                message:
                  "Your password must contain between 4 and 60 characters.",
              },
            })}
            error={getFieldState("password", formState).error?.message}
          />

          <button
            type="submit"
            className="my-3 w-full rounded bg-monza-600 py-4 font-medium disabled:bg-opacity-50"
            disabled={formState.isSubmitted}
          >
            {formState.isSubmitted ? (
              <Image
                src="/images/spinner.png"
                width={20}
                height={20}
                alt="spinner"
                className="m-auto animate-spin"
              />
            ) : (
              "Sign In"
            )}
          </button>

          <div className="inline-flex items-center justify-between text-xs  text-stone-400">
            <div className="inline-flex items-center gap-1">
              <input
                type="checkbox"
                id="remember-me"
                className="h-4 w-4 rounded accent-zinc-600"
                defaultChecked
              />
              <label htmlFor="remember-me">Remember me</label>
            </div>

            <a href="#">Need help?</a>
          </div>

          <div className="my-20 text-stone-400">
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
