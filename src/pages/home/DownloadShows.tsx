import Image from "next/image";

export default function DownloadShows() {
  return (
    <>
      <section
        id="download shows"
        className=" border-b-8 border-[#222] bg-black"
      >
        <div className="m-auto flex max-w-7xl flex-col-reverse items-center gap-6 px-4 py-12 text-center text-white sm:px-10 sm:py-20 lg:flex-row lg:text-left">
          <div className="relative m-auto aspect-[4/3] w-full max-w-[480px]  lg:mr-36 lg:max-w-[500px]">
            <Image fill src="/images/download-show.jpg" alt="download-show" />

            <div className="absolute left-1/2 bottom-3 inline-flex w-[70%] min-w-max -translate-x-1/2 items-center gap-4 rounded-lg border-2 border-[#222] bg-black p-2 sm:w-[75%]">
              <div className="relative aspect-[3/4] w-[32px] shrink-0 grow-0 sm:w-[48px] lg:w-[50px]">
                <Image fill src="/images/boxshot.png" alt="download-show" />
              </div>
              <div className="flex-1 text-left">
                <p className="text-sm sm:text-base ">Stranger Things</p>
                <p className="text-sm text-blue-600 sm:text-base">
                  Downloading...
                </p>
              </div>
              <div className="shrink-0 grow-0">
                <Image
                  width={48}
                  height={48}
                  src="/images/download-icon.gif"
                  alt="download-icon"
                />
              </div>
            </div>
          </div>
          <div>
            <p className="text-2xl font-medium sm:text-4xl sm:leading-[3.5rem] lg:text-[50px]">
              Download your shows to watch offline.
            </p>
            <p className="mt-4 text-lg sm:text-xl lg:text-2xl">
              Save your favorites easily and always have something to watch.
            </p>
          </div>
        </div>
      </section>
      <section
        id="watch on device"
        className=" border-b-8 border-[#222] bg-black"
      >
        <div className="lg:m- m-auto max-w-7xl px-4 py-12 text-center text-white sm:px-10 sm:py-20 lg:flex lg:text-left">
          <div className="lg:flex-1">
            <p className="text-2xl font-medium sm:text-4xl sm:leading-[3.5rem] lg:text-[50px]">
              Watch everywhere.
            </p>
            <p className="mt-4 text-lg sm:text-xl lg:pr-16 lg:text-2xl">
              Stream unlimited movies and TV shows on your phone, tablet,
              laptop, and TV.
            </p>
          </div>
          <div className="lg:flex-1" />
        </div>
      </section>
    </>
  );
}
