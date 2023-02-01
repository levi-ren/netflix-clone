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

      <div className="absolute inset-0 -top-[71px] -z-10 bg-black opacity-60" />

      <div className="z-10 w-full px-11 py-16 text-white">
        <div className="m-auto max-w-xl py-20 text-center md:max-w-[640px]">
          <h1 className="text-2xl font-semibold sm:text-5xl md:text-[50px]">
            Unlimited movies, TV shows, and more.
          </h1>
          <h2 className="my-5 text-xl sm:text-[26px]">
            Watch anywhere. Cancel anytime.
          </h2>
          <p className="mb-5 text-lg">
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <form className="flex flex-col items-center gap-4 sm:flex-row sm:gap-0 ">
            <div className="relative flex-1">
              <input
                id="email"
                className="peer w-full rounded-sm border  px-[10px] py-4 text-sm text-black focus:border-blue-200 focus:outline-none focus:ring-0  sm:text-base"
                placeholder=" "
              />
              <label
                htmlFor="email"
                className="peer-focus absolute top-5 left-2.5 z-10 origin-[0] -translate-y-5 scale-75 transform text-sm text-gray-500 duration-150 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-5 peer-focus:scale-[.85] peer-focus:font-semibold peer-[&:not(:placeholder-shown)]:font-semibold"
              >
                Email address
              </label>
            </div>
            <button className="border border-monza-600 bg-monza-600 py-4 px-3 text-white sm:h-[58px] xl:h-full">
              Get Started &gt;
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
