import styled from '@emotion/styled';
import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import UserEntryButton from './UserEntryButton';

import { CHANNEL, USER_TYPE } from '../../constants/channel';

export default function ChannelItem({
  channel: { _id, name, players, episode },
}) {
  return (
    <Container>
      <h3>{name}</h3>
      <p>{episode.title}</p>
      <Link href={`/channel/${_id}`} key={`player_${_id}`} passHref>
        <a>
          <UserEntryButton
            initialCount={players.length}
            maxCount={episode.characters.length}
            channelId={_id}
            userType={USER_TYPE.PLAYER}
          >
            플레이어로 입장
          </UserEntryButton>
        </a>
      </Link>
      <Link href={`/channel/${_id}`} key={`audience_${_id}`} passHref>
        <a>
          <UserEntryButton
            initialCount={players.length}
            maxCount={CHANNEL.MAX_AUDIENCE}
            channelId={_id}
            userType={USER_TYPE.AUDIENCE}
          >
            시청자로 입장
          </UserEntryButton>
        </a>
      </Link>
    </Container>
  );
}

const Container = styled.div`
  height: 160px;
  margin: 30px;
  padding: 8px;
  border: 1px solid green;
`;

ChannelItem.propTypes = {
  channel: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    players: PropTypes.array.isRequired,
    audience: PropTypes.array.isRequired,
    episode: PropTypes.PropTypes.shape({
      characters: PropTypes.array.isRequired,
      title: PropTypes.string.isRequired,
    }),
  }),
};
