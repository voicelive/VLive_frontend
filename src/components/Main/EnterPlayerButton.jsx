import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSocket } from '../../hooks/socket/useSocket';
import { EVENTS } from '../../constants/socketEvent';

import Button from '../Button';

export default function UserEntryButton({
  initialCount,
  maxCount,
  channelId,
  userType,
  children,
}) {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const [userCount, setUserCount] = useState(initialCount);
  const socket = useSocket(
    EVENTS.LISTEN_ENTER_CHANNEL,
    ({ channelId: id, userType: type }) => {
      if (userType === type && channelId === id) {
        setUserCount((prevCount) => ++prevCount);
      }
    },
  );

  async function onButtonClick(channelId) {
    const { _id, name, email, photoUrl } = JSON.parse(
      sessionStorage.getItem('user'),
    );
    const userData = {
      channelId,
      _id,
      name,
      email,
      photoUrl,
      userType,
    };

    socket.emit(EVENTS.ENTER_CHANNEL, userData);

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
    <Button onClick={() => onButtonClick(channelId)}>
      <h3>{children}</h3>
      <p>
        {userCount} / {maxCount}
      </p>
    </Button>
  );
}

UserEntryButton.propTypes = {
  initialCount: PropTypes.number.isRequired,
  maxCount: PropTypes.number.isRequired,
  channelId: PropTypes.string.isRequired,
  userType: PropTypes.string.isRequired,
  children: PropTypes.string,
};
