import React from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';

import { useSocket } from '../../hooks/socket/useSocket';
import usePlayers from '../../hooks/channel/usePlayers';
import { EVENTS } from '../../constants/socketEvent';

import PlayerItem from './PlayerItem';
import ErrorBox from '../ErrorBox';

export default function PlayerContainer() {
  const {
    query: { channelId },
  } = useRouter();
  const { players, error, mutate } = usePlayers(channelId);

  useSocket(EVENTS.LISTEN_ENTER_CHANNEL, (user) => {
    const newUser = {
      userId: user._id,
      voteCount: 0,
    };

    mutate((prev) => ({ ...prev, players: [...prev.players, newUser] }));
  });

  useSocket(EVENTS.LISTEN_EXIT_CHANNEL, (user) => {
    const newPlayers = players.filter(
      (player) => player.userId._id !== user.userId,
    );

    mutate((prevPlayers) => ({ ...prevPlayers, newPlayers }));
  });

  useSocket(EVENTS.LISTEN_PLAYER_READY, (user) => {
    const readyPlayers = players.map((player) => {
      if (player.userId._id === user._id) {
        player.characterId = user.userRole.characterId;
      }

      return player;
    });

    mutate((prevPlayers) => ({ ...prevPlayers, readyPlayers }));
  });

  if (channelId == null || players == null) {
    return null;
  }

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
  color: white;

  .player-profile {
    width: 100%;
    height: 50px;
  }
`;
