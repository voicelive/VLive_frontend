import React from 'react';
import PropTypes from 'prop-types';
import { useSocket } from '../../hooks/socket/useSocket';
import { EVENTS } from '../../constants/socketEvent';
import { USER_TYPE, CHANNEL } from '../../constants/channel';
import useAudience from '../../hooks/channel/useAudience';

import Link from 'next/link';
import styled from '@emotion/styled';

import Button from '../Button';
import ErrorBox from '../ErrorBox';

export default function AudienceEntryButton({ channelId, isActive }) {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const { audience, error, mutate } = useAudience(channelId);
  const socket = useSocket(EVENTS.LISTEN_ENTER_CHANNEL, (user) => {
    if (user.userType === USER_TYPE.AUDIENCE && user.channelId === channelId) {
      mutate((data) => [...data.audience, user]);
    }
  });

  if (error) {
    return <ErrorBox message={error.message} />;
  }

  if (audience == null) {
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
      userType: USER_TYPE.AUDIENCE,
    });

    await fetch(`${baseUrl}/channel/${channelId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        state: 'enter',
        type: USER_TYPE.AUDIENCE,
        userId: _id,
      }),
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
            <h3>시청자로 입장</h3>
            <p>
              {audience.length} / {CHANNEL.MAX_AUDIENCE}
            </p>
          </Button>
        </a>
      </Link>
    </Wrapper>
  );
}

AudienceEntryButton.propTypes = {
  channelId: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

const Wrapper = styled.div`
  .disable {
    cursor: not-allowed;
  }
`;
