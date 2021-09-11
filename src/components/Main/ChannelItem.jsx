import React from 'react';

import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import PlayerEntryButton from './PlayerEntryButton';
import AudienceEntryButton from './AudienceEntryButton';

export default function ChannelItem({
  channel: { _id, name, episode },
  loginStatus,
}) {
  return (
    <Container>
      <h3>{name}</h3>
      <p>{episode.title}</p>
      <PlayerEntryButton channelId={_id} isActive={loginStatus}>
        플레이어로 입장
      </PlayerEntryButton>
      <AudienceEntryButton channelId={_id} isActive={loginStatus}>
        시청자로 입장
      </AudienceEntryButton>
    </Container>
  );
}

ChannelItem.propTypes = {
  channel: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    episode: PropTypes.PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
  }),
  loginStatus: PropTypes.bool.isRequired,
};

const Container = styled.div`
  height: 160px;
  margin: 30px;
  padding: 8px;
  border: 1px solid green;
`;
