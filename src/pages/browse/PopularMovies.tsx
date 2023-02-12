import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useDiscoverMovie } from "@/swrHooks";
import Image from "next/image";
import { Fragment, useEffect, useState } from "react";

interface PopularMoviesProps {
  country: string;
}

export default function PopularMovies({ country }: PopularMoviesProps) {
  const { data } = useDiscoverMovie(country);
  const isDesktop = useMediaQuery("desktop");
  const [activeIndex, setActiveIndex] = useState(0);
  const split = Array.from({ length: isDesktop ? 4 : 5 }, (_, i) =>
    data?.slice(i * (!isDesktop ? 4 : 5), (i + 1) * (!isDesktop ? 4 : 5))
  );

  useEffect(() => {
    setActiveIndex(0);
  }, [isDesktop]);

  return (
    <>
      {data && (
        <div className="group">
          <div className="xl-pb-6 flex items-end justify-between  px-6 pt-6 pb-4 desktop:px-14 ">
            <p className="text font-medium desktop:text-2xl xl:text-4xl">
              Discover Popular Movies
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
            {activeIndex !== -1 && (
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
              className="flex w-full gap-2 overflow-x-auto  whitespace-nowrap transition-all duration-500 desktop:overflow-x-visible"
              style={{
                transform: `translateX(calc(-${activeIndex * 100}% - ${
                  activeIndex * 8
                }px) )`,
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
                      <button className="relative aspect-poster h-full min-w-[100px]  flex-1 whitespace-normal text-xs font-medium desktop:aspect-video desktop:w-[400px]">
                        <Image
                          draggable={false}
                          src={`https://image.tmdb.org/t/p/w500${
                            isDesktop ? e.backdrop_path : e.poster_path
                          }`}
                          alt={e.name}
                          className="h-full select-none rounded object-contain "
                          fill
                          priority
                        />
                        {isDesktop && (
                          <p className="absolute bottom-0 right-1/2 w-full translate-x-1/2 px-2 text-white">
                            {e.title}
                          </p>
                        )}
                      </button>
                    </Fragment>
                  ))}
                </div>
              ))}
            </div>
            <div className="absolute right-0 top-0 hidden  h-full  group-hover:block">
              <button
                className="h-full"
                onClick={() => {
                  setActiveIndex((p) => (p + 1 > split.length - 1 ? 0 : p + 1));
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
          </div>
        </div>
      )}
    </>
  );
}
