import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useDiscoverTV, useTVDetails } from "@/swrHooks";
import Image from "next/image";
import { Fragment, useEffect, useRef, useState } from "react";
import Modal from "./Modal";

interface TVModalProps {
  country: string;
  id: string;
  tv: any;
}

const TVModal = ({ country, id, tv }: TVModalProps) => {
  const { data } = useTVDetails(id, country);
  return (
    <>
      <div className="bg-zinc-800">
        <div className="relative aspect-video w-full min-w-[250px]">
          <Image
            src={`https://image.tmdb.org/t/p/original${tv.backdrop_path}`}
            alt={tv.name}
            className="w-full select-none object-contain"
            fill
            priority
          />
        </div>
        <div className="space-y-4 p-4 text-sm text-white xl:space-y-6 xl:p-6 xl:text-base 2xl:text-lg">
          <div className="flex gap-2">
            <button className="shrink-0 rounded-full  border-2 bg-white p-2">
              <Image
                src="/icons/play.svg"
                height={20}
                width={20}
                alt="play"
                className="h-3 w-3 xl:h-4 xl:w-4 2xl:h-5 2xl:w-5"
              />
            </button>
            <button className="shrink-0 rounded-full  border-2 p-2">
              <Image
                src="/icons/plus.svg"
                height={20}
                width={20}
                alt="plus"
                className="h-3 w-3 xl:h-4 xl:w-4 2xl:h-5 2xl:w-5"
              />
            </button>
            <button className="shrink-0 rounded-full  border-2 p-2">
              <Image
                src="/icons/like.svg"
                height={20}
                width={20}
                alt="like"
                className="h-3 w-3 xl:h-4 xl:w-4 2xl:h-5 2xl:w-5"
              />
            </button>
            <button className="ml-auto shrink-0 rounded-full border-2 p-2">
              <Image
                src="/icons/chevron.svg"
                height={20}
                width={20}
                alt="chevron"
                className="h-3 w-3 xl:h-4 xl:w-4 2xl:h-5 2xl:w-5"
              />
            </button>
          </div>
          {data && (
            <>
              <div className="space-x-2">
                <span className="font-medium text-green-600">New</span>
                {data?.certification && (
                  <span className="border border-white/20 px-1">
                    {data.certification.rating}
                  </span>
                )}
                {data?.number_of_episodes && (
                  <span>{data.number_of_episodes} Episodes</span>
                )}
              </div>
              <div className="">
                {data.genres.map((g: any) => (
                  <Fragment key={g.id}>
                    <span className="inline-block text-lg text-zinc-400  after:mx-1 after:align-text-top  not-last:after:content-['\2022']">
                      <span className=" text-sm text-white xl:text-base 2xl:text-lg">
                        {g.name}
                      </span>
                    </span>
                  </Fragment>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
      {!data && <div className="h-[82px]" />}
    </>
  );
};

interface NewReleasesProps {
  country: string;
}

export default function NewReleases({ country }: NewReleasesProps) {
  const { data } = useDiscoverTV(country);
  const isDesktop = useMediaQuery("desktop");
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeMovie, setActiveMovie] = useState<any>(null);
  const split = Array.from({ length: isDesktop ? 4 : 5 }, (_, i) =>
    data?.slice(i * (!isDesktop ? 4 : 5), (i + 1) * (!isDesktop ? 4 : 5))
  );
  const scroller = useRef<HTMLDivElement>(null);
  const scroll = useRef({ scrolling: false, clientX: 0, scrollX: 0 });
  const timeRef = useRef<any>(null);

  useEffect(() => {
    setActiveIndex(0);
  }, [isDesktop]);

  return (
    <>
      {data && (
        <div className="group">
          <div className="xl-pb-6 flex items-end justify-between  px-6 pt-6 pb-4 desktop:px-14 ">
            <p className="text font-medium desktop:text-2xl xl:text-4xl">
              New Releases
            </p>
            {isDesktop && (
              <div className="hidden gap-1 group-hover:flex">
                {split.map((_, i) => (
                  <div
                    key={i}
                    className={`w-3 border-t border-t-white/30 transition-colors  ${
                      i === activeIndex && "border-t-white/70"
                    }`}
                  />
                ))}
              </div>
            )}
          </div>
          <div className="relative w-full overflow-auto px-6 scrollbar-hide desktop:overflow-hidden desktop:px-14">
            {activeIndex !== -1 && isDesktop && (
              <div className="absolute left-0 top-0 z-10  hidden  h-full group-hover:block">
                <button
                  className="h-full"
                  onClick={() => {
                    setActiveIndex((p) =>
                      p - 1 < 0 ? split.length - 1 : p - 1
                    );
                  }}
                >
                  <Image
                    src="/icons/chevron.svg"
                    height={55}
                    width={55}
                    alt="chevron"
                    className="rotate-90"
                  />
                </button>
              </div>
            )}
            <div
              className="flex w-full cursor-grab gap-2  overflow-x-auto whitespace-nowrap transition-all duration-500 scrollbar-hide active:cursor-grabbing desktop:cursor-auto desktop:overflow-x-visible desktop:active:cursor-auto"
              style={{
                transform: `translateX(calc(-${activeIndex * 100}% - ${
                  activeIndex * 8
                }px) )`,
              }}
              ref={scroller}
              onMouseDown={(e) => {
                scroll.current = {
                  ...scroll.current,
                  scrolling: true,
                  clientX: e.clientX,
                };
              }}
              onMouseUp={() => {
                scroll.current = {
                  ...scroll.current,
                  scrolling: false,
                };
              }}
              onMouseLeave={() => {
                scroll.current = {
                  ...scroll.current,
                  scrolling: false,
                };
              }}
              onMouseMove={(e) => {
                if (scroller.current && scroll.current.scrolling) {
                  const { clientX, scrollX } = scroll.current;
                  scroller.current.scrollLeft = scrollX + e.clientX - clientX;
                  scroll.current.scrollX = scrollX - e.clientX + clientX;
                  scroll.current.clientX = e.clientX;
                }
              }}
            >
              {split.map((s, i) => (
                <div
                  className={`flex h-full w-full min-w-max flex-1 shrink-0 basis-full gap-2 desktop:min-w-full ${
                    isDesktop &&
                    activeIndex !== i &&
                    "opacity-70 transition duration-1000"
                  }`}
                  key={i}
                >
                  {s.map((e: any) => (
                    <Fragment key={e.id}>
                      <div
                        className="relative aspect-poster h-full  min-w-[100px] flex-1 select-none whitespace-normal text-xs
                        font-medium xs:min-w-[115px] sm:min-w-[125px] desktop:aspect-video desktop:w-[400px]"
                        onMouseOver={(o: any) => {
                          timeRef.current = setTimeout(() => {
                            const bRect = o.target.getClientRects()[0];
                            setActiveMovie({
                              ...e,
                              thumbnailX: bRect.left + bRect.width / 2,
                              thumbnailY: bRect.top + bRect.height / 2,
                            });
                          }, 500);
                        }}
                        onMouseLeave={() => {
                          clearTimeout(timeRef.current);
                        }}
                      >
                        <Image
                          draggable={false}
                          src={`https://image.tmdb.org/t/p/original${
                            isDesktop ? e.backdrop_path : e.poster_path
                          }`}
                          alt={e.name}
                          className="h-full select-none rounded object-contain "
                          fill
                          priority
                        />
                        {isDesktop && (
                          <p className="absolute bottom-0 right-1/2 w-full translate-x-1/2 px-2 text-white">
                            {e.name}
                          </p>
                        )}
                      </div>
                    </Fragment>
                  ))}
                </div>
              ))}
              {isDesktop && activeMovie && (
                <Modal data={activeMovie} setActiveMovie={setActiveMovie}>
                  <TVModal
                    country={country}
                    id={activeMovie.id}
                    tv={activeMovie}
                  />
                </Modal>
              )}
            </div>
            {isDesktop && (
              <div className="absolute right-0 top-0 hidden  h-full  group-hover:block">
                <button
                  className="h-full"
                  onClick={() => {
                    setActiveIndex((p) =>
                      p + 1 > split.length - 1 ? 0 : p + 1
                    );
                  }}
                >
                  <Image
                    src="/icons/chevron.svg"
                    height={55}
                    width={55}
                    alt="chevron"
                    className="-rotate-90"
                  />
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
