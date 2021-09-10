import React from 'react';

import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import { CHANNEL, USER_TYPE } from '../../constants/channel';

import UserEntryButton from './UserEntryButton';

export default function ChannelItem({
  channel: { _id, name, players, episode },
  loginStatus,
}) {
  return (
    <Container>
      <h3>{name}</h3>
      <p>{episode.title}</p>
      <UserEntryButton
        initialCount={players.length}
        maxCount={episode.characters?.length}
        channelId={_id}
        userType={USER_TYPE.PLAYER}
        isActive={loginStatus}
      >
        플레이어로 입장
      </UserEntryButton>
      <UserEntryButton
        initialCount={players.length}
        maxCount={CHANNEL.MAX_AUDIENCE}
        channelId={_id}
        userType={USER_TYPE.AUDIENCE}
        isActive={loginStatus}
      >
        시청자로 입장
      </UserEntryButton>
    </Container>
  );
}

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
  loginStatus: PropTypes.boolean,
};

const Container = styled.div`
  height: 160px;
  margin: 30px;
  padding: 8px;
  border: 1px solid green;
`;
