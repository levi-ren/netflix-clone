import { useState } from "react";

const PasswordField = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="flex ">
      <div className="peer relative w-full flex-1 text-stone-300">
        <input
          placeholder=" "
          type={show ? "text" : "password"}
          id="password-field"
          className="peer w-full rounded rounded-r-none border border-none bg-zinc-700 px-[10px] pt-6 pb-2 pr-0  text-sm  focus:outline-none sm:text-base"
          autoComplete="new-password"
          defaultValue=""
        />
        <label
          htmlFor="password-field"
          className="peer-focus absolute top-1/2 left-2.5 z-10 origin-[0] -translate-y-5 scale-[.85] transform text-sm  duration-150 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:-translate-y-5 peer-focus:scale-[.85] peer-focus:font-medium peer-[&:not(:placeholder-shown)]:font-medium"
        >
          Password
        </label>
      </div>

      <button
        type="button"
        className="r rounded  rounded-l-none bg-zinc-700 px-3 text-sm  outline-0 peer-focus-within:block"
        onClick={() => setShow((p) => !p)}
      >
        {show ? "SHOW" : "HIDE"}
      </button>
    </div>
  );
};

export default PasswordField;
