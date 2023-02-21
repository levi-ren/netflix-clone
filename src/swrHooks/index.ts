import { fetcher } from "@/utilities/api";
import useSWR from "swr";

export const useRandomTV = (country: string, language: string) =>
  useSWR(
    country && language ? ["/api/randTV?", country, language] : null,
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
    country ? ["/api/discoverTV?", country] : null,
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
    country ? ["/api/discoverMovie?", country] : null,
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
    () => (language && id ? ["/api/tvImage?", language, id] : null),
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

export const useTVDetails = (id: string, country: string) =>
  useSWR(
    id && country ? ["/api/tvDetails?", id, country] : null,
    ([r, id, country]) =>
      fetcher(r, {
        id,
        country,
      }),
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );

export const useMovieDetails = (id: string, country: string) =>
  useSWR(
    id && country ? ["/api/movieDetails?", id, country] : null,
    ([r, id, country]) =>
      fetcher(r, {
        id,
        country,
      }),
    {
      revalidateIfStale: false,
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
    }
  );
