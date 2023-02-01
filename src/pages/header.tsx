import Image from "next/image";

export default function Header() {
  return (
    <header className="pt-7">
      <div className="mx-4 flex items-center justify-between xs:mx-6 sm:mx-14">
        <div className="relative h-8 w-24">
          <Image src="/logo.svg" fill alt="logo" />
        </div>
        <button className="rounded bg-monza-600 py-1 px-2 text-sm text-white sm:text-base">
          Sign in
        </button>
      </div>
    </header>
  );
}
