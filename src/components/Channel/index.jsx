import React from 'react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';

import useChannel from '../../hooks/channel/useChannel';

import ChannelMain from './ChannelMain';
import ChannelSide from './ChannelSide';
import ErrorBox from '../ErrorBox';

export default function Channel() {
  const {
    query: { channelId },
  } = useRouter();
  const { channel, error } = useChannel(channelId);

  if (error) {
    return <ErrorBox message={error.message} />;
  }

  if (channelId == null || channel == null) {
    return null;
  }

  return (
    <Container>
      <ChannelMain />
      <ChannelSide />
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
      rgba(54, 54, 54, 0.5),
      rgba(58, 57, 57, 0.842),
      rgba(5, 5, 5, 0.746)
    ),
  height: 100vh;
`;
