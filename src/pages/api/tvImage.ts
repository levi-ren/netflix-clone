import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { language, id } = req.query;
  const respo = await fetch(
    `https://api.themoviedb.org/3/tv/${id as string}/images?` +
      new URLSearchParams({
        api_key: process.env.TMDB_API_KEY!,
        language: language as string,
      })
  );
  const data = await respo.json();
  res.status(200).json(data);
}
