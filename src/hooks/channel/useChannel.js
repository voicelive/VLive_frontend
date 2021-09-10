import useSWR from 'swr';
import { API } from '../constants/api';

async function fetcher(channelId) {
  try {
    const response = await fetch(`${API.URL}/channel/${channelId}`, {
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
  const {
    data: channel,
    error,
    mutate,
  } = useSWR(channelId ? `/channel/${channelId}` : null, () => {
    return fetcher(channelId);
  });

  return { channel, error, mutate };
}
