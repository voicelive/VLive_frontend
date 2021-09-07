import useSWR from 'swr';

async function fetcher(channelId) {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  try {
    const response = await fetch(`${baseUrl}/channel/${channelId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const { data } = await response.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}

export default function useChannel(channelId) {
  const { data: channel } = useSWR('/channel/channelId', () => {
    return fetcher(channelId);
  });

  return channel;
}
