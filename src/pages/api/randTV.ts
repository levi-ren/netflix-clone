import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { country, language } = req.query;
  console.log(country, language);
  const randPage = Math.floor(Math.random() * 3) + 1;
  const randShow = Math.floor(Math.random() * 19);
  const respo = await fetch(
    "https://api.themoviedb.org/3/discover/tv?" +
      new URLSearchParams({
        api_key: process.env.TMDB_API_KEY!,
        with_networks: "213",
        page: `${randPage}`,
        watch_region: country as string,
        with_watch_providers: "8",
        include_image_language: language as string,
      })
  );
  const data = await respo.json();

  const imgRespo = await fetch(
    `https://api.themoviedb.org/3/tv/${data.results[randShow].id}/images?` +
      new URLSearchParams({
        api_key: process.env.TMDB_API_KEY!,
        language: language as string,
      })
  );

  const img = await imgRespo.json();

  res.status(200).json({
    ...data.results[randShow],
    logo: img.logos[0],
    poster_path: img.posters[0]?.file_path,
  });
}
