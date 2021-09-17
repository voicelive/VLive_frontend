import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import styled from '@emotion/styled';
import theme from '../../styles/theme';

import { useSocket } from '../../hooks/socket/useSocket';
import usePlayers from '../../hooks/channel/usePlayers';
import useChannel from '../../hooks/channel/useChannel';
import { EVENTS } from '../../constants/socketEvent';
import { API } from '../../constants/api';

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
    <Wrapper isActive={isActive}>
      <Link
        href={isActive ? `/channel/${channelId}` : '#'}
        key={channelId}
        passHref
      >
        <a className={!isActive ? 'disable' : null}>
          <Button
            className="entry-button"
            onClick={() => onButtonClick(channelId)}
            bgColor={!isActive ? 'gray' : theme.blue}
            hoverBgColor={theme.pink}
            width="100px"
            height="50px"
          >
            <span className="entry-text">PLAY</span>
            <span className="entry-count">
              {players.length} / {channel.episode.characters.length}
            </span>
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
  line-height: 2px;

  a {
    text-decoration: none;
  }

  .entry-button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .entry-text {
      padding: 5%;
      font-size: 1.6em;
      font-weight: 800;
      color: ${({ isActive, theme }) =>
        !isActive ? theme.darkNavy : theme.white};
    }

    .entry-count {
      padding: 3%;
      font-size: 1.1em;
      font-weight: 700;
      color: ${({ isActive, theme }) =>
        !isActive ? theme.darkNavy : theme.navy};
    }
  }

  .disable {
    cursor: not-allowed;
    pointer-events: none;
  }
`;
