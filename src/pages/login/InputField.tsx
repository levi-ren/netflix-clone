import { UseFormRegisterReturn } from "react-hook-form/dist/types";

interface InputFieldProps {
  register: UseFormRegisterReturn<"email">;
  error?: string;
}

const InputField = ({ register, error }: InputFieldProps) => {
  return (
    <div>
      <div
        className={`group relative w-full flex-1 rounded ${
          error && "border-b-2 border-b-[#e87c03]"
        }`}
      >
        <input
          {...register}
          placeholder=" "
          id="sign-in-email"
          className="peer w-full rounded border border-none bg-zinc-700 px-[10px] pt-6 pb-2   text-sm text-stone-300  focus:outline-none sm:text-base"
          autoComplete="new-password"
          defaultValue=""
        />
        <label
          htmlFor="sign-in-email"
          className="absolute top-1/2 left-2.5 z-10 origin-[0] -translate-y-6 scale-[.85] transform text-sm text-stone-300 duration-150 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-autofill:text-black peer-focus:-translate-y-6 peer-focus:scale-[.85] "
        >
          Email or phone number
        </label>
      </div>

      <p className="py-2 text-xs text-[#e87c03]">{error}</p>
    </div>
  );
};

export default InputField;
