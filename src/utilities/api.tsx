export const fetcher = async (url: string, params: Record<string, string>) =>
  fetch(url + new URLSearchParams(params)).then((res) => res.json());
