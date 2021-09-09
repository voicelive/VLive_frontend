import useSWR from 'swr';

async function fetcher(channelId, userId) {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  try {
    const response = await fetch(
      `${baseUrl}/channel/${channelId}/users/${userId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    const { data } = await response.json();

    return data;
  } catch (err) {
    alert(err.message);
  }
}

export default function useUserType(channelId, userId) {
  const { data: userType, error } = useSWR(
    '/channel/channelId/users/userId',
    () => {
      return fetcher(channelId, userId);
    },
  );

  return { userType, error };
}
