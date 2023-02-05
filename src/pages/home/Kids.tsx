import Image from "next/image";

export default function Kids() {
  return (
    <section id="download shows" className=" border-b-8 border-[#222] bg-black">
      <div className="m-auto flex max-w-7xl flex-col-reverse items-center  px-4 py-12 text-center text-white sm:px-10 sm:py-20 lg:flex-row lg:text-left">
        <div className="relative m-auto aspect-[4/3] w-full max-w-[600px]   lg:max-w-[500px]">
          <Image fill src="/images/kids.png" alt="download-show" />
        </div>
        <div className="lg:pl-20">
          <p className="text-2xl font-medium sm:text-4xl sm:leading-[3.5rem] lg:text-[50px]">
            Create profiles for kids.
          </p>
          <p className="mt-4 text-lg sm:text-xl lg:text-2xl">
            Send kids on adventures with their favorite characters in a space
            made just for them—free with your membership.
          </p>
        </div>
      </div>
    </section>
  );
}
