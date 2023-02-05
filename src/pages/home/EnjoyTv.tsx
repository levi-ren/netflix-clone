import Image from "next/image";

export default function EnjoyTv() {
  return (
    <section id="enjoy tv" className=" border-b-8 border-[#222] bg-black">
      <div className="m-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-12 text-center text-white sm:px-10 sm:py-20 lg:flex-row lg:text-left">
        <div>
          <p className="text-2xl font-medium sm:text-4xl lg:text-[50px]">
            Enjoy on your TV.
          </p>
          <p className="mt-4 text-lg sm:text-xl lg:text-2xl">
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </p>
        </div>
        <div className="relative m-auto aspect-[4/3] w-full max-w-[600px] lg:max-w-[500px]">
          <Image fill src="/images/tv.png" alt="tv" />
        </div>
      </div>
    </section>
  );
}
