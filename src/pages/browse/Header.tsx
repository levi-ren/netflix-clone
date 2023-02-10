import { useMediaQuery } from "@/hooks/useMediaQuery";
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
const Image = dynamic(() => import("next/image"), { ssr: false });

export default function Header() {
  const navRef = useRef<HTMLElement | null>(null);
  const onMobile = useMediaQuery("xxs", "phone");

  const e = () => {
    if (navRef.current) {
      if (window.scrollY >= 10) {
        navRef.current.classList.replace("bg-transparent", "bg-black/90");
      } else {
        navRef.current.classList.replace("bg-black/90", "bg-transparent");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", e);
    return () => {
      window.removeEventListener("scroll", e);
    };
  }, []);

  return (
    <nav
      id="header"
      className="fixed top-0 z-20 w-full bg-transparent p-2 transition-colors duration-500 sm:p-4"
      ref={navRef}
    >
      <div className="m-auto">
        <div className="flex items-center justify-between phone:mx-4 ">
          <div className="relative h-12 w-12 phone:w-28">
            <Image
              src={onMobile ? "/icons/logo2.svg" : "/icons/logo.svg"}
              fill
              priority
              alt="logo"
            />
          </div>
          <div className="flex items-center gap-4 pr-3 phone:pr-0">
            <Image
              src="/icons/magnify.svg"
              width={20}
              height={20}
              priority
              className="rounded-sm"
              alt="user-avatar"
            />
            <Image
              src="/icons/notification.svg"
              width={20}
              height={20}
              priority
              className="rounded-sm"
              alt="user-avatar"
            />
            <div className="group relative">
              <button className=" flex items-center gap-1">
                <Image
                  src="/images/avatar.png"
                  width={35}
                  height={35}
                  priority
                  className="rounded-sm"
                  alt="user-avatar"
                />
                <Image
                  src="/icons/chevron.svg"
                  height={20}
                  width={20}
                  alt="chevron"
                  className="hidden transition group-hover:rotate-180 desktop:block"
                />
              </button>
              <div className="invisible absolute top-9 right-0 hidden w-max  text-xs text-white opacity-0 transition duration-500 hover:visible group-hover:visible group-hover:opacity-100 desktop:block">
                <div className="mt-8 bg-transparent" />
                <div className="bg-black/90 p-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <button
                      key={i}
                      className=" flex w-full cursor-pointer items-center gap-2 py-1"
                      aria-label={`select-user-${i}`}
                    >
                      <Image
                        src="/images/avatar.png"
                        alt={`avatar${i}`}
                        className="mb-1 rounded"
                        width={30}
                        height={30}
                      />
                      <>User {i}</>
                    </button>
                  ))}
                </div>
                <button className="border-t border-t-white/30 bg-black/90 py-3 px-14">
                  Sign out of Netflix
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
