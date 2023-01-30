import Image from "next/image";

export default function Greetings() {
  return (
    <section id="greeting" className="relative ">
      <div className="absolute inset-0 -top-[71px] -z-10 overflow-hidden">
        <Image
          src="/images/banner.webp"
          fill
          alt="banner"
          className="object-cover"
        />
      </div>

      <div className="absolute inset-0 -top-[71px] -z-10  bg-gradient-to-r from-black via-transparent to-black" />
      <div className="absolute inset-0 -top-[71px] -z-10  bg-gradient-to-b from-black via-transparent to-black" />

      <div className="z-10 w-full px-11 py-16 text-white">
        <div className="m-auto max-w-xl py-20 text-center md:max-w-[800px]">
          <h1 className="text-2xl font-bold sm:text-5xl md:text-6xl">
            Unlimited movies, TV shows, and more.
          </h1>
          <h2 className="my-4 text-xl font-semibold sm:text-2xl">
            Watch anywhere. Cancel anytime.
          </h2>
          <p className="text-lg">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <form className="flex flex-col items-center gap-4 sm:flex-row sm:gap-0">
            <div className="relative w-full flex-1">
              <input
                id="email"
                className="peer w-full rounded-sm border p-4 px-3 text-sm focus:border-blue-200 focus:outline-none focus:ring-0 sm:py-4 sm:text-base "
              />
              <label
                htmlFor="email"
                className="absolute left-[20px] top-1/2 -translate-y-1/2 transform border-r-0 text-gray-400 duration-300 peer-placeholder-shown:scale-100 peer-focus:-translate-y-7 peer-focus:-translate-x-3 peer-focus:scale-75 peer-focus:font-semibold sm:peer-focus:-translate-x-5 sm:peer-focus:-translate-y-8"
              >
                Email address
              </label>
            </div>
            <button className="bg-monza-600 py-4 px-3 text-white sm:h-[58px]">
              Get Started &gt;{" "}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
