import useChannel from './useChannel';

export default function usePlayers(channelId) {
  const {
    channel: { audience },
    error,
  } = useChannel(channelId);

  return { audience, error };
}
