import { useMediaQuery } from "@/hooks/useMediaQuery";
import Image from "next/image";
import { useEffect, useRef } from "react";

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
      className="fixed top-0 z-10 w-full bg-transparent p-2 transition-colors duration-500 sm:p-4"
      ref={navRef}
    >
      <div className="m-auto">
        <div className="flex items-center justify-between phone:mx-4 ">
          <div className="relative h-8 w-8 phone:w-28">
            <Image
              src={onMobile ? "/icons/logo2.svg" : "/icons/logo.svg"}
              fill
              alt="logo"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
