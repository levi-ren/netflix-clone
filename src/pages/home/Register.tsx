import Image from "next/image";
import { useId } from "react";

const Register = () => {
  const id = useId();
  return (
    <>
      <p className="mb-5 px-2 text-lg text-inherit">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <form className="flex flex-col items-center gap-4 sm:flex-row sm:gap-0 ">
        <div className="relative w-full flex-1">
          <input
            id={id}
            className="peer w-full rounded-sm border  px-[10px] py-4 text-sm text-black focus:border-blue-200 focus:outline-none focus:ring-0  sm:text-base"
            placeholder=" "
          />
          <label
            htmlFor={id}
            className="peer-focus absolute top-1/2 left-2.5 z-10 origin-[0] -translate-y-7 scale-[.85] transform text-sm text-gray-500 duration-150 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:-translate-y-7 peer-focus:scale-[.85] peer-focus:font-semibold peer-[&:not(:placeholder-shown)]:font-semibold"
          >
            Email address
          </label>
        </div>
        <button className="flex items-center justify-between rounded-sm border border-monza-600 bg-monza-600 py-2 px-4 text-white sm:h-[58px] ">
          Get Started
          <Image
            src="/icons/chevron.svg"
            height={20}
            width={20}
            alt="logo"
            className="-rotate-90"
          />
        </button>
      </form>
    </>
  );
};

export default Register;
