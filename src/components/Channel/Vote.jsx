import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styled from '@emotion/styled';

import usePlayers from '../../hooks/channel/usePlayers';
import { API } from '../../constants/api';
import ErrorBox from '../ErrorBox';

export default function Vote() {
  const {
    query: { channelId },
  } = useRouter();
  const [userId, setUserId] = useState('');
  const [characterId, setCharacterId] = useState('');
  const { players, error } = usePlayers(channelId);

  if (error) {
    return <ErrorBox message={error.message} />;
  }

  useEffect(() => {
    const { _id } = JSON.parse(sessionStorage.getItem('user'));
    setUserId(_id);
  }, []);

  async function addVoteCount(ev) {
    if (characterId) {
      return;
    }

    setCharacterId(ev.currentTarget.id);
    ev.currentTarget.childNodes[1].classList.add('clicked');

    try {
      await fetch(`${API.URL}/channel/${channelId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          state: 'voting',
          userId,
          characterId,
        }),
      });
    } catch (err) {
      return <ErrorBox message={error.message} />;
    }
  }

  return (
    <Wrapper>
      <h1 className="vote-title">최고의 캐릭터에게 투표해주세요</h1>
      <span className="vote-subtitle">10초동안 투표가 진행됩니다.</span>
      <div className="characters">
        {players &&
          players.map((player) => (
            <div
              className="character"
              key={player._id}
              id={player._id}
              onClick={addVoteCount}
            >
              <Image
                src={player.characterId?.imgUrl}
                alt="character-image"
                width={110}
                height={150}
              />
              <span className="character-name">{player.characterId?.name}</span>
              <span className="user-name">{player.userId?.name}</span>
            </div>
          ))}
      </div>
    </Wrapper>
  );
}

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

    .character {
      margin: 0 20px;
      cursor: pointer;
      transition: all 100ms ease-out;

      &:hover {
        transform: scale(1.02);
      }
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

    .clicked {
      color: ${({ theme }) => theme.pink};
    }
  }
`;
