import React from 'react';
import PropTypes from 'prop-types';

export default function PlayerItem({ player: { userId, characterId } }) {
  return (
    <div key={userId?._id} className="player-profile">
      <div className="player-name">{userId?.name}</div>
      <div className="character-name">{characterId?.name}</div>
    </div>
  );
}

PlayerItem.propTypes = {
  player: PropTypes.shape({
    userId: PropTypes.object.isRequired,
    characterId: PropTypes.object,
  }),
};
