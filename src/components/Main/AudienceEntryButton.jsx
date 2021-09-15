import React from 'react';
import PropTypes from 'prop-types';
import { useSocket } from '../../hooks/socket/useSocket';
import { EVENTS } from '../../constants/socketEvent';
import { USER_TYPE, CHANNEL } from '../../constants/channel';
import useAudience from '../../hooks/channel/useAudience';
import { API } from '../../constants/api';

import Link from 'next/link';
import styled from '@emotion/styled';

import Button from '../Button';
import ErrorBox from '../ErrorBox';

export default function AudienceEntryButton({ channelId, isActive }) {
  const { audience, error, mutate } = useAudience(channelId);
  useSocket(EVENTS.LISTEN_ENTER_CHANNEL, (user) => {
    if (user.userType === USER_TYPE.AUDIENCE && user.channelId === channelId) {
      mutate((data) => ({ ...data, audience: [...data.audience, { user }] }));
    }
  });

  if (error) {
    return <ErrorBox message={error.message} />;
  }

  if (audience == null) {
    return <></>;
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
          type: USER_TYPE.AUDIENCE,
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
            width="140px"
            height="40px"
          >
            <h3 className="entry-text">시청자로 입장</h3>
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
  line-height: 2px;

  a {
    text-decoration: none;
  }

  .entry-text {
    font-size: 1.2em;
    font-weight: 400;
  }

  .disable {
    cursor: not-allowed;
    pointer-events: none;
  }
`;
