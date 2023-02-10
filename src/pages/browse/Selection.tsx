import { useMediaQuery } from "@/hooks/useMediaQuery";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRandomTV } from "../../swrHooks";
import Helmet from "../components/Helmet";
import Header from "./Header";
import NewReleases from "./NewReleases";

interface FeaturedProps {
  data: any;
}

const Featured = ({ data }: FeaturedProps) => {
  const onMobile = useMediaQuery("xxs", "phone");
  return (
    <>
      <Image
        src={`https://image.tmdb.org/t/p/original${
          data?.[onMobile ? "poster_path" : "backdrop_path"]
        }`}
        fill
        alt="featured-show"
        className="object-cover phone:bg-top phone:object-contain"
        priority
      />

      {!onMobile && <div className="absolute inset-0  bg-black opacity-30" />}

      {onMobile && (
        <div className="absolute bottom-0 flex w-full  justify-evenly bg-gradient-to-t from-black px-4 pt-16">
          <button className="p-2 text-center text-white">
            <Image
              src="/icons/plus.svg"
              width={20}
              height={20}
              alt="play-icon"
              className="m-auto"
            />
            <span className="text-xs">My List</span>
          </button>
          <button className="align-center flex  items-center  gap-2 rounded bg-white px-6 py-2 text-black">
            <Image
              src="/icons/play.svg"
              width={20}
              height={20}
              alt="play-icon"
            />
            <span className="font-medium ">Play</span>
          </button>
          <button className="p-2 text-center text-white">
            <Image
              src="/icons/info.svg"
              width={20}
              height={20}
              alt="play-icon"
              className="m-auto"
            />
            <span className="text-xs">Info</span>
          </button>
        </div>

        /* {data && (
          <div className="absolute left-[2%] bottom-[25%]  z-10  max-w-[35vw] text-white">
            <div className="relative mb-[1vw] aspect-[16/7] w-[30vw]  overflow-hidden">
              <Image
                src={`https://image.tmdb.org/t/p/w500${data?.logo.file_path}`}
                fill
                alt="overview"
                className="object-contain"
                priority
              />
            </div>

            <div className="mb-[1vw] text-[1.2vw]">{data.overview}</div>
            <div className="flex gap-[1vw] text-[0.8vw]">
              <button className="flex items-center gap-[1vw] rounded bg-white py-[0.8vw] px-[1.1vw] text-black">
                <Image
                  src="/icons/play.svg"
                  width={20}
                  height={20}
                  alt="play-icon"
                  className="h-[1vw] w-[1vw]"
                />
                <span className="font-medium ">Play</span>
              </button>
              <button className="flex items-center gap-[1vw] rounded bg-white bg-opacity-20 py-[0.8vw] px-[1.1vw] text-white">
                <Image
                  src="/icons/info.svg"
                  width={20}
                  height={20}
                  alt="play-icon"
                  className="h-[1vw] w-[1vw]"
                />
                <span className="font-medium ">More Info</span>
              </button>
            </div>
          </div>
        )} */
      )}
    </>
  );
};

export default function Selection() {
  const [language, setLanguage] = useState("");
  const [country, setCountry] = useState("");
  const { data, isLoading, error } = useRandomTV(country, language);
  useEffect(() => {
    const locale = navigator.language.split("-");
    setLanguage(locale[0]);
    setCountry(locale[1]);
  }, []);

  if (isLoading) return <>Loading...</>;
  if (error) return <>Error</>;

  return (
    <>
      <Helmet />
      <Header />
      <div className="relative pb-[150vw] phone:pb-[56.3vw]">
        <div className="absolute inset-0  aspect-poster w-full overflow-hidden phone:aspect-video">
          {data && <Featured data={data} />}
        </div>
      </div>
      <div className="p-4 text-white">
        <NewReleases country={country} />
      </div>
    </>
  );
}
