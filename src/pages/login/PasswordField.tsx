import { useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form/dist/types/form";

interface PasswordFieldProps {
  register: UseFormRegisterReturn<"password">;
  error?: string;
}

const PasswordField = ({ register, error }: PasswordFieldProps) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div
        className={`group flex rounded ${
          error && "border-b-2 border-b-[#e87c03]"
        }`}
      >
        <div className="peer relative w-full flex-1 text-stone-300">
          <input
            {...register}
            placeholder=" "
            type={show ? "text" : "password"}
            id="password-field"
            className="peer w-full rounded  border border-none bg-zinc-700 px-[10px] pt-6 pb-2 text-sm  focus:pr-0  focus:outline-none group-focus-within:rounded-r-none sm:text-base"
            autoComplete="new-password"
            defaultValue=""
          />
          <label
            htmlFor="password-field"
            className="peer-focus absolute top-1/2 left-2.5 z-10 origin-[0] -translate-y-6 scale-[.85] transform text-sm  duration-150 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-autofill:text-black peer-focus:-translate-y-6 peer-focus:scale-[.85] "
          >
            Password
          </label>
        </div>

        <button
          type="button"
          className=" z-20 hidden rounded rounded-l-none bg-zinc-700  px-3 text-sm outline-0 group-focus-within:block"
          onClick={() => {
            setShow((p) => !p);
          }}
        >
          {!show ? "SHOW" : "HIDE"}
        </button>
      </div>

      <p className="py-2 text-xs text-[#e87c03]">{error}</p>
    </div>
  );
};

export default PasswordField;
