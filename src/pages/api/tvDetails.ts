import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id, country } = req.query;
  const respo = await fetch(
    `https://api.themoviedb.org/3/tv/${id}?` +
      new URLSearchParams({
        api_key: process.env.TMDB_API_KEY!,
      })
  );
  const data = await respo.json();
  const respo2 = await fetch(
    `https://api.themoviedb.org/3/tv/${id}/content_ratings?` +
      new URLSearchParams({
        api_key: process.env.TMDB_API_KEY!,
        language: country as string,
      })
  );
  const data2 = await respo2.json();

  const certification =
    data2.results.find((d: any) => d["iso_3166_1"] === country) ||
    data2.results[0];
  res.status(200).json({ ...data, certification });
}
