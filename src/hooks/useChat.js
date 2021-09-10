import useSWR from 'swr';
import ErrorBox from '../components/ErrorBox';

async function fetcher(channelId) {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  try {
    const response = await fetch(`${baseUrl}/chat/${channelId}`, {
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
