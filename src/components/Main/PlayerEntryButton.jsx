import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styled from '@emotion/styled';

import { useSocket } from '../../hooks/socket/useSocket';
import usePlayers from '../../hooks/channel/usePlayers';
import useChannel from '../../hooks/channel/useChannel';
import { API } from '../../constants/api';
import { EVENTS } from '../../constants/socketEvent';

import Button from '../Button';
import ErrorBox from '../ErrorBox';

export default function PlayerEntryButton({ channelId, isActive }) {
  const { channel, error } = useChannel(channelId);
  const { players, mutate } = usePlayers(channelId);

  useSocket(EVENTS.LISTEN_ENTER_CHANNEL, (user) => {
    if (user.channelId === channelId) {
      mutate((prev) => ({ ...prev, players: [...prev.players, { user }] }));
    }
  });

  useSocket(EVENTS.LISTEN_EXIT_CHANNEL, (user) => {
    if (user.channelId === channelId) {
      const newPlayers = players.filter(
        (player) => player.userId._id !== user.userId,
      );

      mutate((data) => {
        return { ...data, players: newPlayers };
      });
    }
  });

  if (error) {
    return <ErrorBox message={error.message} />;
  }

  if (channelId == null || channel == null) {
    return null;
  }

  async function onButtonClick(channelId) {
    try {
      const { _id } = JSON.parse(sessionStorage.getItem('user'));

      const response = await fetch(`${API.URL}/channel/${channelId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          state: 'enter',
          userId: _id,
        }),
      });

      const { result, message } = await response.json();

      if (result === 'error') {
        throw new Error(message);
      }
    } catch (err) {
      return <ErrorBox message={err.message} />;
    }
  }

  return (
    <Wrapper>
      <Link
        href={isActive ? `/channel/${channelId}` : '#'}
        key={channelId}
        passHref
      >
        <a className={!isActive ? 'disable' : null}>
          <Button
            onClick={() => onButtonClick(channelId)}
            color={!isActive ? 'gray' : null}
          >
            <h3>플레이어로 입장</h3>
            <p>
              {players.length} / {channel.episode.characters.length}
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
