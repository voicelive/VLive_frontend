import useSWR from 'swr';
import { API } from '../../constants/api';

import ErrorBox from '../../components/ErrorBox';

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
    const { result, userType, message } = await response.json();

    if (result === 'error') {
      throw new Error(message);
    }

    return userType;
  } catch (err) {
    return <ErrorBox message={err.message} />;
  }
}

export default function useUserType(channelId, userId) {
  const {
    data: userType,
    error,
    mutate,
  } = useSWR(
    channelId && userId ? `/channel/${channelId}/users/${userId}` : null,
    () => fetcher(channelId, userId),
  );

  return { userType, error, mutate };
}
