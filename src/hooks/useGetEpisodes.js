import useSWR from 'swr';

async function fetcher() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  try {
    const response = await fetch(`${baseUrl}/episode`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const { data: episodes } = await response.json();

    return episodes;
  } catch (err) {
    return err;
  }
}

export default function useGetEpisodes() {
  const { data: episodes, error } = useSWR('/episode', fetcher);

  return { episodes, error };
}
