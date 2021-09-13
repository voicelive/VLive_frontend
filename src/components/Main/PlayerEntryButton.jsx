import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styled from '@emotion/styled';

import { useSocket } from '../../hooks/socket/useSocket';
import usePlayers from '../../hooks/channel/usePlayers';
import useChannel from '../../hooks/channel/useChannel';

import { API } from '../../constants/api';
import { EVENTS } from '../../constants/socketEvent';
import { USER_TYPE } from '../../constants/channel';

import Button from '../Button';
import ErrorBox from '../ErrorBox';

export default function PlayerEntryButton({ channelId, isActive }) {
  const { channel, error } = useChannel(channelId);
  const { players, mutate } = usePlayers(channelId);

  const socket = useSocket(EVENTS.LISTEN_ENTER_CHANNEL, (user) => {
    if (user.userType === USER_TYPE.PLAYER && user.channelId === channelId) {
      mutate((data) => ({ ...data, audience: [...data.audience, { user }] }));
    }
  });

  if (channelId == null || players == null || channel == null) {
    return <></>;
  }

  socket.on('listen exit channel list', (user) => {
    const targetChannel = user.channelId;

    if (
      user.userType.type === USER_TYPE.PLAYER &&
      targetChannel === channelId
    ) {
      const existPlayers = players.filter(
        (player) => player._id !== user.userId,
      );

      mutate((prevPlayers) => ({ ...prevPlayers, existPlayers }));
    }
  });

  if (error) {
    return <ErrorBox message={error.message} />;
  }

  async function onButtonClick(channelId) {
    const { _id, name, email, photoUrl } = JSON.parse(
      sessionStorage.getItem('user'),
    );
    try {
      await fetch(`${API.URL}/channel/${channelId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          state: 'enter',
          type: USER_TYPE.PLAYER,
          userId: _id,
        }),
      });
    } catch (err) {
      console.error(err);
    }

    socket.emit(EVENTS.ENTER_CHANNEL, {
      _id,
      name,
      email,
      photoUrl,
      channelId,
      userType: USER_TYPE.PLAYER,
    });
  }

  return (
    <Wrapper>
      <Link
        href={isActive ? `/channel/${channelId}` : '#'}
        key={channelId}
        passHref
      >
        <a className={!isActive && 'disable'}>
          <Button
            onClick={() => onButtonClick(channelId)}
            color={!isActive && 'gray'}
          >
            <h3>플레이어로 입장</h3>
            <p>
              {players.length} / {channel?.episode.characters.length}
            </p>
          </Button>
        </a>
      </Link>
    </Wrapper>
  );
}

PlayerEntryButton.propTypes = {
  channelId: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

const Wrapper = styled.div`
  .disable {
    cursor: not-allowed;
    pointer-events: none;
  }
`;
