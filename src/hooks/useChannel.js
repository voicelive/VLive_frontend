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
    const { data: channel } = await response.json();

    return channel;
  } catch (err) {
    alert(err.message);
  }
}

export default function useChannel(channelId) {
  const { data: channel, error } = useSWR(
    channelId ? '/channel/channelId' : null,
    () => {
      return fetcher(channelId);
    },
  );

  return { channel, error };
}
