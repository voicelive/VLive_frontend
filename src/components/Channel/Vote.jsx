import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import usePlayers from '../../hooks/channel/usePlayers';

import { API } from '../../constants/api';

import ErrorBox from '../ErrorBox';

export default function Vote({ onVoteTimeEnd, onVote }) {
  const {
    query: { channelId },
  } = useRouter();
  const { players, error } = usePlayers(channelId);
  const [playerId, setPlayerId] = useState('');

  if (error) {
    return <ErrorBox message={error.message} />;
  }

  if (channelId == null || players == null) {
    return null;
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      onVoteTimeEnd();
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  async function selectCharacter({ currentTarget }) {
    setPlayerId(currentTarget.id);

    try {
      const response = await fetch(`${API.URL}/channel/${channelId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          state: 'voting',
          playerId: currentTarget.id,
        }),
      });

      const { result, message } = await response.json();

      if (result === 'error') {
        throw new Error(message);
      }

      onVote();
    } catch (err) {
      return <ErrorBox message={err.message} />;
    }
  }

  return (
    <Wrapper>
      <h1 className="vote-title">최고의 캐릭터에게 투표해주세요</h1>
      <span className="vote-subtitle">투표는 한 번만 참여 가능합니다.</span>
      <div className="characters">
        {players.map((player) => (
          <Character
            className="character"
            key={player._id}
            id={player._id}
            onClick={selectCharacter}
          >
            <div className={`img ${playerId === player._id && 'border'}`}>
              <Image
                src={player.characterId?.imgUrl}
                alt="character-image"
                width={110}
                height={150}
              />
            </div>
            <span className={`img ${playerId === player._id && 'color'}`}>
              {player.characterId?.name}
            </span>
            <span className="user-name">{player.userId?.name}</span>
          </Character>
        ))}
      </div>
    </Wrapper>
  );
}

Vote.propTypes = {
  onVoteTimeEnd: PropTypes.func.isRequired,
  onVote: PropTypes.func.isRequired,
};

const Wrapper = styled.div`
  color: white;

  .vote-title {
    margin: 15px 0 0 0;
    font-size: 20px;
  }

  .vote-subtitle {
    padding: 20px 0 0 0;
    font-weight: 200px;
    font-size: 16px;
    color: #898bf3;
  }

  .characters {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
  }
`;

const Character = styled.div`
  margin: 0 20px;
  cursor: pointer;
  transition: all 100ms ease-out;

  &:hover {
    transform: scale(1.02);
  }

  .img {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 113px;
    height: 153px;
  }

  .character-name {
    display: block;
    padding: 4px 0;
    font-size: 18px;
  }

  .user-name {
    background-color: #898bf3;
    padding: 0px 4px;
    border-radius: 5px;
    font-weight: 700;
    font-size: 13px;
    color: black;
  }

  .color {
    color: ${({ theme }) => theme.pink};
  }

  .border {
    border: ${({ theme }) => '3px solid' + theme.pink};
  }
`;
