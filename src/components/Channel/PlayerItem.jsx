import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

export default function PlayerItem({ player: { userId, characterId } }) {
  const [ready, setReady] = useState(null);

  useEffect(() => {
    if (characterId?._id) {
      setReady({ state: 'ready' });
    }
  }, []);

  return (
    <Contents key={userId._id}>
      <div className={ready?.state}>{userId.name}</div>
      <div className="character-name">{characterId?.name}</div>
    </Contents>
  );
}

PlayerItem.propTypes = {
  player: PropTypes.shape({
    userId: PropTypes.object.isRequired,
    characterId: PropTypes.object,
  }),
};

const Contents = styled.div`
  height: 10%;
  padding: 5px;
  border: 2px solid darkNavy;

  .ready {
    border: 2px solid pink;
  }
`;
