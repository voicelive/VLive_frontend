import useSWR from 'swr';

async function fetcher() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  try {
    const response = await fetch(`${baseUrl}/channel`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const { data: channels } = await response.json();

    return channels;
  } catch (err) {
    return err;
  }
}

export default function useEpisodes() {
  const { data: channels, error } = useSWR('/channel', fetcher);

  return { channels, error };
}
