import { fetcher } from "@/utilities/api";

async function getShows() {
  const res = await fetcher("https://api.themoviedb.org/3/discover/tv", {
    api_key: process.env.TMDB_API_KEY!,
    with_networks: "213",
  });
  const data = res.json();

  return { data };
}

interface BrowseProps {}

export default async function Browse() {
  const data = await getShows();
  return <div>BROWSE</div>;
}
