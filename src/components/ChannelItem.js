import styled from '@emotion/styled';
import React from 'react';
import PropTypes from 'prop-types';

export default function ChannelItem({ channel }) {
  return (
    <Container>
      <h1>채널 이름: {channel.name}</h1>
      <h3>플레이어 수: {channel.players.length}</h3>
      <h3>시청자 수: {channel.audience.length}</h3>
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
    name: PropTypes.string.isRequired,
    players: PropTypes.array.isRequired,
    audience: PropTypes.array.isRequired,
  }),
};
