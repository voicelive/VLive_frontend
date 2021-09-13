import React from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';

import { socketClient } from '../../hooks/socket/useSocket';
import useChannel from '../../hooks/channel/useChannel';
import PlayerItem from './PlayerItem';
import ErrorBox from '../ErrorBox';
import { EVENTS } from '../../constants/socketEvent';

export default function PlayerContainer() {
  const {
    query: { channelId },
  } = useRouter();

  const { channel, error, mutate } = useChannel(channelId);
  const players = channel ? channel.players : [];
  console.log(players, 'PlayerContainer players');

  if (channelId == null || players.length == null) {
    return <></>;
  }

  if (error) {
    return <ErrorBox message={error.message} />;
  }

  socketClient.on('player로 가자', (userData) => {
    console.log('업데이트 x ');
    console.log(userData, 'userData');
    const user = {
      userId: {
        email: userData.email,
        name: userData.name,
        photoUrl: userData.photoUrl,
      },
      voteCount: 0,
    };

    mutate((prevPlayers) => ({ ...prevPlayers, user }));
  });

  socketClient.on(EVENTS.LISTEN_PLAYER_READY, ({ _id, userRole }) => {
    const readyPlayers = players.map((player) => {
      if (player.userId._id === _id) {
        player.characterId = userRole.characterId;
      }

      return player;
    });

    mutate((prevPlayers) => ({ ...prevPlayers, readyPlayers }));
  });

  socketClient.on(EVENTS.LISTEN_EXIT_CHANNEL, (userId) => {
    const existPlayers = players.filter((player) => player.userId !== userId);
    mutate((prevPlayers) => ({ ...prevPlayers, existPlayers }));
  });

  return (
    <Wrapper>
      {players?.map((player) => (
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
