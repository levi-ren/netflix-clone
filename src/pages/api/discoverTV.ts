import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { country } = req.query;
  const respo = await fetch(
    "https://api.themoviedb.org/3/discover/tv?" +
      new URLSearchParams({
        api_key: process.env.TMDB_API_KEY!,
        with_networks: "213",
        page: "1",
        watch_region: country as string,
        with_watch_providers: "8",
        sort_by: "first_air_date.desc",
      })
  );
  const data = await respo.json();

  res.status(200).json(data.results);
}
