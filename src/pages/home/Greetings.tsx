import Image from "next/image";
import Register from "./Register";

export default function Greetings() {
  return (
    <section id="greetings" className="relative ">
      <div className="absolute inset-0 -top-[76px] -z-10 overflow-hidden">
        <Image
          src="/images/banner.jpg"
          fill
          alt="banner"
          className="object-cover"
          priority
        />
      </div>

      <div className="absolute inset-0 -top-[76px] -z-10 bg-black opacity-60" />

      <div className="z-10 w-full border-b-8 border-[#222] px-5 py-12 text-white sm:px-7 sm:py-16">
        <div className="m-auto max-w-xl text-center sm:py-20 md:max-w-[640px]">
          <h1 className="text-[28px] font-medium leading-8 sm:text-5xl md:text-[50px]">
            Unlimited movies, TV shows, and more.
          </h1>
          <h2 className="my-5 text-lg sm:text-[26px]">
            Watch anywhere. Cancel anytime.
          </h2>
          <Register />
        </div>
      </div>
    </section>
  );
}
