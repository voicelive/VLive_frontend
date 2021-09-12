import React from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';

import { socketClient } from '../../hooks/socket/useSocket';
import usePlayers from '../../hooks/channel/usePlayers';
import PlayerItem from './PlayerItem';
import ErrorBox from '../ErrorBox';
import { EVENTS } from '../../constants/socketEvent';

export default function PlayerContainer() {
  const {
    query: { channelId },
  } = useRouter();
  const { players, error, mutate } = usePlayers(channelId);
  console.log(channelId, 'channelId');

  if (channelId == null || players == null) {
    return <></>;
  }

  if (error) {
    return <ErrorBox message={error.message} />;
  }

  socketClient.on(EVENTS.LISTEN_PLAYER_READY, ({ _id, userRole }) => {
    const newPlayers = players.map((player) => {
      if (player.userId._id === _id) {
        player.characterId = userRole.characterId;
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
