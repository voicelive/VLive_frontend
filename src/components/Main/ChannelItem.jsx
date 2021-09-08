import styled from '@emotion/styled';
import React from 'react';
import PropTypes from 'prop-types';

export default function ChannelItem({ channel: { name, players, audience } }) {
  return (
    <Container>
      <h3>채널 이름: {name}</h3>
      <p>플레이어 수: {players.length}</p>
      <p>시청자 수: {audience.length}</p>
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
