import useSWR from 'swr';

import ErrorBox from '../components/ErrorBox';
import { API } from '../constants/api';

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
      return <ErrorBox message={message} />;
    }

    return data;
  } catch (err) {
    return <ErrorBox message={err.message} />;
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
