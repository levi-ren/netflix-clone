import { useId } from "react";

const InputField = () => {
  const id = useId();
  return (
    <div className="group relative w-full flex-1">
      <input
        placeholder=" "
        type="email"
        id={id}
        className="peer w-full rounded border border-none bg-zinc-700 px-[10px] pt-6 pb-2   text-sm text-stone-300 invalid:empty:bg-red-600 focus:outline-none sm:text-base"
        autoComplete="new-password"
        defaultValue=" "
      />
      <label
        htmlFor={id}
        className="peer-focus absolute top-1/2 left-2.5 z-10 origin-[0] -translate-y-5 scale-[.85] transform text-sm text-stone-300 duration-150 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:-translate-y-5 peer-focus:scale-[.85] peer-focus:font-medium peer-[&:not(:placeholder-shown)]:font-medium"
      >
        Email or phone number
      </label>
    </div>
  );
};

export default InputField;
