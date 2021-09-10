import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import useChannel from '../../hooks/channel/useChannel';

import PlayerItem from './PlayerItem';
import AudienceItem from './AudienceItem';
import ErrorBox from '../ErrorBox';
import Button from '../Button';

export default function ChannelSide() {
  const {
    query: { channelId },
  } = useRouter();
  const { channel, error } = useChannel(channelId);
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(JSON.parse(sessionStorage.getItem('user')));
  }, []);

  if (!channelId || !channel) {
    return <></>;
  }

  if (error) {
    return <ErrorBox message={error.message} />;
  }

  const { host, players, audience } = channel;

  return (
    <SideContainer>
      <PlayerWrapper>
        {players.map((player) => (
          <PlayerItem key={player} player={player} />
        ))}
      </PlayerWrapper>
      <AudienceWrapper>
        {audience.map((user) => (
          <AudienceItem key={user?._id} user={user} />
        ))}
      </AudienceWrapper>
      <ButtonWrapper>
        {user?._id === host ? <Button>Start</Button> : <Button>Ready</Button>}
        <Button>나가기</Button>
      </ButtonWrapper>
    </SideContainer>
  );
}

const SideContainer = styled.div`
  width: 20%;
  height: auto;
  background: #1d2e3c;
  opacity: 0.8;
`;

const PlayerWrapper = styled.div`
  width: 100%;
  height: 55%;
  .player-profile {
    width: 100%;
    height: 50px;
  }
`;

const AudienceWrapper = styled.div`
  width: 100%;
  height: 30%;
  border: 1px solid black;
`;

const ButtonWrapper = styled.div`
  padding: 10px;
`;
