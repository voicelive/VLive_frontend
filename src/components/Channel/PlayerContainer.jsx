import React from 'react';
import { useRouter } from 'next/router';
import { socketClient } from '../../hooks/socket/useSocket';
import styled from '@emotion/styled';
import usePlayers from '../../hooks/channel/usePlayers';

import PlayerItem from './PlayerItem';
import ErrorBox from '../ErrorBox';

export default function PlayerContainer() {
  const {
    query: { channelId },
  } = useRouter();
  const { players, error, mutate } = usePlayers(channelId);

  if (channelId == null || players == null) {
    return <></>;
  }

  if (error) {
    return <ErrorBox message={error.message} />;
  }

  socketClient.on('listen player ready', ({ userId, characterId }) => {
    const newPlayers = players.map((player) => {
      if (player.userId._id === userId) {
        player.characterId = characterId;
      }

      return player;
    });

    mutate((data) => ({ ...data, players: [...newPlayers] }));
  });

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
