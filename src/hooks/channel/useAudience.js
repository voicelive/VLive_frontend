import useChannel from './useChannel';

export default function useAudience(channelId) {
  const { channel, error, mutate } = useChannel(channelId);
  const audience = channel ? channel.audience : [];

  return { audience, error, mutate };
}
