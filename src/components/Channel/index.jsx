import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';

import ChannelMain from './ChannelMain';
import ChannelSide from './ChannelSide';
import ErrorBox from '../ErrorBox';
import { socketClient } from '../../hooks/socket/useSocket';
import { EVENTS } from '../../constants/socketEvent';
import useChannel from '../../hooks/channel/useChannel';
import { getUser } from '../../utils/user';

export default function Channel() {
  const {
    query: { channelId },
  } = useRouter();
  const { channel, error } = useChannel(channelId);

  useEffect(() => {
    if (channelId == null) return;

    try {
      (async () => {
        const user = await getUser(channelId);

        socketClient.emit(EVENTS.ENTER_CHANNEL, user);
      })();
    } catch (err) {
      return <ErrorBox message={err.message} />;
    }
  }, []);

  if (channelId == null || channel == null) {
    return <></>;
  }

  if (error) {
    return <ErrorBox message={error.message} />;
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
      rgba(100, 98, 98, 0.5),
      rgba(58, 57, 57, 0.842),
      rgba(5, 5, 5, 0.746)
    ),
    url('/images/background.jpg');
  height: 100vh;
`;
