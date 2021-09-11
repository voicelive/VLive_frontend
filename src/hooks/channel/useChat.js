import useSWR from 'swr';
import { API } from '../../constants/api';

async function fetcher(channelId) {
  try {
    const response = await fetch(`${API.URL}/chat/${channelId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const { result, data, message } = await response.json();

    if (result === 'error') {
      throw new Error(message);
    }

    return data;
  } catch (err) {
    return err;
  }
}
export default function useChat(channelId) {
  const { data: chatList, mutate } = useSWR(
    channelId ? '/chat/channelId' : null,
    () => {
      return fetcher(channelId);
    },
  );

  return { chatList, mutate };
}
