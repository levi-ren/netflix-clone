import { useDiscoverTV } from "@/swrHooks";
import Image from "next/image";
import { Fragment } from "react";

interface NewReleasesProps {
  country: string;
}

function shuffle(array: Array<any>) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export default function NewReleases({ country }: NewReleasesProps) {
  const { data, isLoading, error } = useDiscoverTV(country);
  console.log(data);
  return (
    <>
      <p className="mb-2 font-medium">New Releases</p>
      <div className="flex gap-1 overflow-x-auto scrollbar-hide">
        {data &&
          data.map((e: any) => (
            <Fragment key={e.id}>
              {e.poster_path && (
                <div className="select-none">
                  <Image
                    draggable={false}
                    src={`https://image.tmdb.org/t/p/w300${e.poster_path}`}
                    alt={e.name}
                    className="h-auto w-auto min-w-[100px] select-none rounded"
                    width={200}
                    height={100}
                    priority
                  />
                </div>
              )}
            </Fragment>
          ))}
      </div>

      <p className="mb-2 font-medium">Oldies But Goodies</p>
      <div className="flex gap-1 overflow-x-auto scrollbar-hide">
        {data &&
          shuffle(data).map((e: any) => (
            <Fragment key={e.id}>
              {e.poster_path && (
                <div className="select-none">
                  <Image
                    draggable={false}
                    src={`https://image.tmdb.org/t/p/w300${e.poster_path}`}
                    alt={e.name}
                    className="h-auto w-auto min-w-[100px] select-none rounded"
                    width={200}
                    height={100}
                    priority
                  />
                </div>
              )}
            </Fragment>
          ))}
      </div>

      <p className="mb-2 font-medium">Discover Something New</p>
      <div className="flex gap-1 overflow-x-auto scrollbar-hide">
        {data &&
          shuffle(data).map((e: any) => (
            <Fragment key={e.id}>
              {e.poster_path && (
                <div className="select-none">
                  <Image
                    draggable={false}
                    src={`https://image.tmdb.org/t/p/w300${e.poster_path}`}
                    alt={e.name}
                    className="h-auto w-auto min-w-[100px] select-none rounded"
                    width={200}
                    height={100}
                    priority
                  />
                </div>
              )}
            </Fragment>
          ))}
      </div>
    </>
  );
}
