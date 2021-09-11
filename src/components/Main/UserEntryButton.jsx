import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useSocket } from '../../hooks/socket/useSocket';
import { EVENTS } from '../../constants/socketEvent';
import Link from 'next/link';

import Button from '../Button';

export default function UserEntryButton({
  initialCount,
  maxCount,
  channelId,
  userType,
  children,
  isActive,
}) {
  const [userCount, setUserCount] = useState(initialCount);
  const [user, setUser] = useState(null);
  const socket = useSocket(
    EVENTS.LISTEN_ENTER_CHANNEL,
    ({ channelId: id, userType: type }) => {
      if (userType === type && channelId === id) {
        setUserCount((prevCount) => ++prevCount);
      }
    },
  );

  useEffect(() => {
    const { _id, name, email, photoIrl } = JSON.parse(
      sessionStorage.getItem('user'),
    );

    setUser({ _id, name, email, photoIrl });
  }, []);

  async function onButtonClick(channelId) {
    if (isActive === false) {
      return alert('로그인 해주세요');
    }

    socket.emit(EVENTS.ENTER_CHANNEL, {
      ...user,
      channelId,
      userType,
    });

    await fetch(`${baseUrl}/channel/${channelId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        state: 'enter',
        type: userType,
        userId: _id,
      }),
    });
  }

  return (
    <Link
      href={isActive === true ? `/channel/${channelId}` : '/main'}
      key={channelId}
      passHref
    >
      <a>
        <Button
          onClick={() => onButtonClick(channelId)}
          color={isActive === false && 'gray'}
        >
          <h3>{children}</h3>
          <p>
            {userCount} / {maxCount}
          </p>
        </Button>
      </a>
    </Link>
  );
}

UserEntryButton.propTypes = {
  initialCount: PropTypes.number.isRequired,
  maxCount: PropTypes.number.isRequired,
  channelId: PropTypes.string.isRequired,
  userType: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  isActive: PropTypes.boolean,
};
