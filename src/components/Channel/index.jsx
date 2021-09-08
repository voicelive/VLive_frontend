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
  position: relative;
  text-align: center;
  background-image: linear-gradient(
      rgba(5, 5, 5, 0.746),
      rgba(58, 57, 57, 0.842),
      rgba(100, 98, 98, 0.5),
      rgba(58, 57, 57, 0.842),
      rgba(5, 5, 5, 0.746)
    ),
    url('/images/background.jpg');
  height: 100vh;
`;
