import useSWR from 'swr';
import { API } from '../../constants/api';

async function fetcher() {
  try {
    const response = await fetch(`${API.URL}/channel`, {
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

export default function useChannels() {
  const { data: channels, error, mutate } = useSWR('/channel', fetcher);
  const historyChannels = [];
  const activeChannels = [];

  channels?.forEach((channel) => {
    channel.isActive
      ? activeChannels.push(channel)
      : historyChannels.push(channel);
  });

  return { historyChannels, activeChannels, error, mutate };
}
