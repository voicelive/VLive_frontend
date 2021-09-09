import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';

import useChannel from '../../hooks/useChannel';
import ErrorBox from '../ErrorBox';
import Button from '../Button';

export default function ChannelSide() {
  const [currentUsers, setCurrentUsers] = useState([]);
  const {
    query: { channelId },
  } = useRouter();
  const { channel, error } = useChannel(channelId);

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem('user'));

    setCurrentUsers(currentUsers.concat(user));
  }, []);

  if (channelId == null || channel == null) {
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
          <div key={player._id} className="player-profile">
            <div className="player">{player.userId.name}</div>
            <div className="character">{player.characterId?.name}</div>
          </div>
        ))}
      </PlayerWrapper>
      <AudienceWrapper>
        {audience.map((user) => (
          <div key={user._id} className="user-id">
            {user.name}
          </div>
        ))}
      </AudienceWrapper>
      <ButtonWrapper>
        {currentUsers[0]._id === host._id ? (
          <Button>Start</Button>
        ) : (
          <Button>Ready</Button>
        )}
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
