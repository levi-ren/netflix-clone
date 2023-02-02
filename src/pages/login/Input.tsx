import { HTMLInputTypeAttribute, ReactNode, useId } from "react";

type InputProps = {
  placeholder: string;
  type: HTMLInputTypeAttribute;
  rightAdornment?: ReactNode;
};

const Input = ({ placeholder, type, rightAdornment }: InputProps) => {
  const id = useId();
  return (
    <div className={`relative w-full flex-1`}>
      <input
        type={type}
        id={id}
        className="peer w-full rounded border border-none bg-zinc-700 px-[10px] pt-6 pb-2   text-sm text-stone-300 focus:border-blue-200 focus:outline-none focus:ring-0 sm:text-base"
        placeholder=" "
        required
        autoComplete="off"
      />
      <label
        htmlFor={id}
        className="peer-focus absolute top-1/2 left-2.5 z-10 origin-[0] -translate-y-5 scale-[.85] transform text-sm text-stone-300 duration-150 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:-translate-y-5 peer-focus:scale-[.85] peer-focus:font-semibold peer-[&:not(:placeholder-shown)]:font-semibold"
      >
        {placeholder}
      </label>
    </div>
  );
};

export default Input;
