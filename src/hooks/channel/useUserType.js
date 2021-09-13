import useSWR from 'swr';
import { API } from '../../constants/api';

async function fetcher(channelId, userId) {
  try {
    const response = await fetch(
      `${API.URL}/channel/${channelId}/users/${userId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    const userType = await response.json();

    return userType;
  } catch (err) {
    alert(err.message);
  }
}

export default function useUserType(channelId, userId) {
  const {
    data: userType,
    error,
    mutate,
  } = useSWR(
    channelId && userId ? `/channel/${channelId}/users/${userId}` : null,
    () => {
      return fetcher(channelId, userId);
    },
  );

  return { userType, error, mutate };
}
