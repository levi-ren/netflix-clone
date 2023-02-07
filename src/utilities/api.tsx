export const fetcher = async (url: string, params: Record<string, string>) => {
  return await fetch(url + new URLSearchParams(params).toString());
};
