import Input from "./Input";

interface SignInProps {}

const SignIn = (props: SignInProps) => {
  return (
    <div className="m-auto max-w-md">
      <div className="p-4 text-white md:p-16">
        <p className="mt-4 mb-8 text-4xl font-semibold">Sign In</p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col gap-4"
        >
          <Input placeholder="Email or phone number" type="email" />
          <Input
            placeholder="Password"
            type="password"
            rightAdornment={<button type="button">SHOW</button>}
          />

          <button
            type="submit"
            className="mt-8 w-full rounded bg-monza-600 py-4"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
