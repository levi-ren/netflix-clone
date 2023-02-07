import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Header() {
  const { route } = useRouter();

  return (
    <div id="header" className="pt-7">
      <div className="m-auto max-w-screen-3xl">
        <div className="mx-4 flex items-center justify-between xs:mx-6 sm:mx-14">
          <Link
            href="/"
            className="relative h-8 w-24 md:h-10 md:w-28 xl:h-12 xl:w-44"
          >
            <Image src="/icons/logo.svg" fill alt="logo" />
          </Link>
          {route !== "/login" && (
            <Link
              id="login"
              href="/login"
              className="rounded bg-monza-600 py-1 px-2 text-sm text-white target:hidden sm:py-2 sm:px-4 sm:text-base"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
