import useSWR from 'swr';
import { API } from '../../constants/api';

async function fetcher() {
  try {
    const user = JSON.parse(sessionStorage.getItem('user'));
    const response = await fetch(`${API.URL}/episode`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: `bearer ${user?.token}`,
      },
    });
    const { data: episodes } = await response.json();

    return episodes;
  } catch (err) {
    return err;
  }
}

export default function useGetEpisodes() {
  const { data: episodes, error } = useSWR('/episode', fetcher);

  return { episodes, error };
}
