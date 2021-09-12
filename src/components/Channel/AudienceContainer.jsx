import React from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import useAudience from '../../hooks/channel/useAudience';

import { socketClient } from '../../hooks/socket/useSocket';
import { EVENTS } from '../../constants/socketEvent';
import AudienceItem from './AudienceItem';
import ErrorBox from '../ErrorBox';

export default function AudienceContainer() {
  const {
    query: { channelId },
  } = useRouter();
  const { audience, error, mutate } = useAudience(channelId);

  if (error) {
    return <ErrorBox message={error.message} />;
  }

  socketClient.on(EVENTS.LISTEN_EXIT_CHANNEL, (userId) => {
    const existAudience = audience.filter((viewer) => viewer !== userId);
    mutate((prevAudience) => ({ ...prevAudience, existAudience }));
  });

  return (
    <Wrapper>
      {audience.map((viewer) => (
        <AudienceItem key={viewer._id} user={viewer} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 30%;
  border: 1px solid red;
`;
