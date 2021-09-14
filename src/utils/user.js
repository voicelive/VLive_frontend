import { API } from '../constants/api';

export async function getUser(channelId) {
  const { _id, name, email, photoUrl } = JSON.parse(
    sessionStorage.getItem('user'),
  );
  const response = await fetch(`${API.URL}/channel/${channelId}/users/${_id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const { result, data, message } = await response.json();

  if (result === 'error') {
    throw new Error(message);
  }

  return {
    _id,
    name,
    email,
    photoUrl,
    channelId,
    userType: data.type,
  };
}
