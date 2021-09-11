import React from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';

import useChannel from '../../hooks/useChannel';
import { socketClient } from '../../hooks/socket/useSocket';
import Button from '../../components/Button';
import ErrorBox from '../ErrorBox';
import { EVENTS } from '../../constants/socketEvent';
import { API } from '../../constants/api';

async function endChannelHandler(id) {
  try {
    await fetch(`${API.URL}/channel/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        state: 'end',
      }),
    });

    socketClient.emit(EVENTS.END_CHANNEL, id);
  } catch (error) {
    return error;
  }
}

export default function ChannelVideo() {
  const {
    query: { channelId },
  } = useRouter();
  const { channel, error } = useChannel(channelId);

  if (channelId == null || channel == null) {
    return <></>;
  }

  if (error) {
    return <ErrorBox message={error.message} />;
  }

  return (
    <MainContainer>
      <Button onClick={() => endChannelHandler(channelId)}>game end</Button>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: auto;
  height: auto;
`;
