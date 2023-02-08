import { fetcher } from "@/utilities/api";
import useSWR from "swr";

export const useRandomTV = (country: string, language: string) =>
  useSWR(
    country && language
      ? ["http://localhost:3000/api/randTV?", country, language]
      : null,
    ([r, c, l]) =>
      fetcher(r, {
        country: c,
        language: l,
      }),
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

export const useDiscoverTV = (country: string) =>
  useSWR(
    country ? ["http://localhost:3000/api/discoverTV?", country] : null,
    ([r, l]) =>
      fetcher(r, {
        country: l,
      }),
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

export const useDiscoverMovie = (country: string) =>
  useSWR(
    country ? ["http://localhost:3000/api/discoverMovie?", country] : null,
    ([r, l]) =>
      fetcher(r, {
        country: l,
      }),
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

export const useTVImage = (language: string, id: string) =>
  useSWR(
    () =>
      language && id
        ? ["http://localhost:3000/api/tvImage?", language, id]
        : null,
    ([r, l, i]) =>
      fetcher(r, {
        language: l,
        id: i,
      }),
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
