import React from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';

import ChannelMain from './ChannelMain';
import ChannelSide from './ChannelSide';

export default function Channel() {
  const {
    query: { channelId },
  } = useRouter();

  return (
    <Container>
      <ChannelMain channelId={channelId} />
      <ChannelSide channelId={channelId} />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;
