import styled from '@emotion/styled';
import React from 'react';
import PropTypes from 'prop-types';

export default function ChannelItem({ channel }) {
  return (
    <Container>
      <h3>채널 이름: {channel.name}</h3>
      <p>플레이어 수: {channel.players.length}</p>
      <p>시청자 수: {channel.audience.length}</p>
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
