import React from 'react';
import PropTypes from 'prop-types';
import { useSocket } from '../../hooks/socket/useSocket';
import { EVENTS } from '../../constants/socketEvent';
import { USER_TYPE } from '../../constants/channel';
import usePlayers from '../../hooks/channel/usePlayers';
import useChannel from '../../hooks/channel/useChannel';

import Link from 'next/link';
import styled from '@emotion/styled';

import Button from '../Button';
import ErrorBox from '../ErrorBox';

export default function PlayerEntryButton({ channelId, isActive }) {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const { channel, error } = useChannel(channelId);
  const { players, mutate } = usePlayers(channelId);
  const socket = useSocket(EVENTS.LISTEN_ENTER_CHANNEL, (user) => {
    if (user.userType === USER_TYPE.PLAYER && user.channelId === channelId) {
      mutate([...players, user]);
    }
  });

  if (error) {
    return <ErrorBox message={error.message} />;
  }

  if (channelId == null || channel == null || players == null) {
    return <></>;
  }

  async function onButtonClick(channelId) {
    const { _id, name, email, photoUrl } = JSON.parse(
      sessionStorage.getItem('user'),
    );

    socket.emit(EVENTS.ENTER_CHANNEL, {
      _id,
      name,
      email,
      photoUrl,
      channelId,
      userType: USER_TYPE.PLAYER,
    });

    await fetch(`${baseUrl}/channel/${channelId}`, {
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
  }

  return (
    <Wrapper>
      <Link
        href={isActive ? `/channel/${channelId}` : '/main'}
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
  }
`;
