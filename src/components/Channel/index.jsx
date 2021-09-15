import React, { useEffect } from 'react';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';

import { socketClient } from '../../hooks/socket/useSocket';
import useChannel from '../../hooks/channel/useChannel';
import { EVENTS } from '../../constants/socketEvent';
import { API } from '../../constants/api';

import ChannelMain from './ChannelMain';
import ChannelSide from './ChannelSide';
import ErrorBox from '../ErrorBox';

export default function Channel() {
  const {
    query: { channelId },
  } = useRouter();
  const { channel, error } = useChannel(channelId);

  useEffect(async () => {
    if (channelId == null) return;

    try {
      const { _id, name, email, photoUrl } = JSON.parse(
        sessionStorage.getItem('user'),
      );

      const response = await fetch(
        `${API.URL}/channel/${channelId}/users/${_id}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );

      const { result, type, message } = await response.json();

      if (result === 'error') {
        throw new Error(message);
      }

      const user = {
        _id,
        name,
        email,
        photoUrl,
        channelId,
        userType: type,
      };

      socketClient.emit(EVENTS.ENTER_CHANNEL, user);
    } catch (err) {
      return <ErrorBox message={err.message} />;
    }
  }, []);

  if (channelId == null || channel == null) {
    return null;
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
