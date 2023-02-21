import type { NextApiRequest, NextApiResponse } from "next";

function time_convert(num: number) {
  var hours = Math.floor(num / 60);
  var minutes = num % 60;
  return `${hours}h  ${minutes}m`;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { id, country } = req.query;
  const respo = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?` +
      new URLSearchParams({
        api_key: process.env.TMDB_API_KEY!,
        language: country as string,
        append_to_response: "releases",
      })
  );
  const data = await respo.json();
  res.status(200).json({
    ...data,
    certification: data.releases.countries.find(
      (d: any) => d["iso_3166_1"] === country
    )?.certification,
    runtime: time_convert(data.runtime),
  });
}
