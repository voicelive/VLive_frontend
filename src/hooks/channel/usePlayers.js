import useChannel from './useChannel';

export default function usePlayers(channelId) {
  const {
    channel: { players },
    error,
  } = useChannel(channelId);

  return { players, error };
}
