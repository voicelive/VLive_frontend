import React from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import usePlayers from '../../hooks/channel/usePlayers';

import PlayerItem from './PlayerItem';
import ErrorBox from '../ErrorBox';

export default function PlayerContainer() {
  const {
    query: { channelId },
  } = useRouter();
  const { players, error } = usePlayers(channelId);

  if (error) {
    return <ErrorBox message={error.message} />;
  }

  return (
    <Wrapper>
      {players.map((player) => (
        <PlayerItem key={player._id} player={player} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 55%;
  .player-profile {
    width: 100%;
    height: 50px;
  }
`;
