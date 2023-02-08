import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { country } = req.query;
  const respo = await fetch(
    "https://api.themoviedb.org/3/discover/movie?" +
      new URLSearchParams({
        api_key: process.env.TMDB_API_KEY!,
        watch_region: country as string,
        with_watch_providers: "8",
      })
  );
  const data = await respo.json();
  res.status(200).json(data);
}
