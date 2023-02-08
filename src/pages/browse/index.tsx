import Image from "next/image";
import { useEffect, useState } from "react";
import Helmet from "../components/Helmet";
import { useRandomTV } from "../swrHooks";

export default function Browse() {
  const [language, setLanguage] = useState("");
  const [country, setCountry] = useState("");
  const { data, isLoading, error } = useRandomTV(country, language);
  // const { data: images } = useTVImage(language, data?.results[9].id);
  // useDiscoverMovie(language);
  useEffect(() => {
    const locale = navigator.language.split("-");
    setLanguage(locale[0]);
    setCountry(locale[1]);
  }, []);

  if (isLoading) return <>Loading...</>;
  if (error) return <>Error</>;

  console.log(data);

  return (
    <>
      <Helmet />
      <div className="absolute inset-0 -z-20 aspect-video w-full overflow-hidden">
        {data && (
          <Image
            src={`https://image.tmdb.org/t/p/original${data?.backdrop_path}`}
            fill
            alt="banner"
            className="bg-top object-contain"
            priority
          />
        )}

        <div className="absolute inset-0  bg-black opacity-30" />
        {data && (
          <div className="absolute left-[2%] bottom-[25%]  z-10  max-w-[35vw] text-white">
            <div className="relative mb-[1vw] aspect-[16/7] w-[30vw]  overflow-hidden">
              <Image
                src={`https://image.tmdb.org/t/p/w500${data?.logo.file_path}`}
                fill
                alt="banner"
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
        )}
      </div>
    </>
  );
}
