import Image from "next/image";

export default function Header() {
  return (
    <header className="pt-7">
      <div className="mx-14 flex items-center justify-between">
        <Image src="/logo.svg" height={40} width={160} alt="logo" />
        <button className="rounded bg-monza-600 py-2 px-3 text-white">
          Sign in
        </button>
      </div>
    </header>
  );
}
