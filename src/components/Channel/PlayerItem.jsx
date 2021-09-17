import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

export default function PlayerItem({ player: { userId, characterId } }) {
  return (
    <PlayerInfo key={userId?._id}>
      <div className="player-name">{userId?.name}</div>
      <div className="character-name">{characterId?.name}</div>
    </PlayerInfo>
  );
}

PlayerItem.propTypes = {
  player: PropTypes.shape({
    userId: PropTypes.object.isRequired,
    characterId: PropTypes.object,
  }),
};

const PlayerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 30%;
  margin-top: 10px;
  text-align: center;

  .character-name {
    width: 80px;
    border-radius: 10px;
    background-color: ${({ theme }) => theme.pink};
    color: ${({ theme }) => theme.white};
  }
`;
