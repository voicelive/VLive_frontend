import { socketClient } from './socket/useSocket';
import { EVENTS } from '../constants/socketEvent';

export default async function useChannelEnd(endChannelId) {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  await fetch(`${baseUrl}/channel/${endChannelId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      state: 'end',
    }),
  });

  socketClient.emit(EVENTS.END_CHANNEL, endChannelId);
}
