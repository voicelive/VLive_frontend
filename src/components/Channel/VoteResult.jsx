import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import React from 'react';
import styled from '@emotion/styled';

import usePlayers from '../../hooks/channel/usePlayers';
import { API } from '../../constants/api';
import { socketClient } from '../../hooks/socket/useSocket';

import { EVENTS } from '../../constants/socketEvent';

import ErrorBox from '../ErrorBox';

export default function VoteResult() {
  const {
    query: { channelId },
  } = useRouter();
  const router = useRouter();
  const { players, error } = usePlayers(channelId);
  const [winners, setWinners] = useState([]);

  if (error) {
    return <ErrorBox message={error.message} />;
  }

  useEffect(() => {
    const timeId = setTimeout(() => {
      router.push('/main');
    }, 5000);

    return () => {
      clearTimeout(timeId);
      removeUserInChannel();

      socketClient.emit(EVENTS.END_CHANNEL, channelId);
      socketClient.off(EVENTS.LISTEN_ENTER_CHANNEL);
      socketClient.off(EVENTS.LISTEN_NEW_CHAT);
    };
  }, []);

  useEffect(() => {
    const voteCounts = players.map((player) => player.voteCount);

    players.forEach((player) => {
      if (player.voteCount === Math.max(...voteCounts)) {
        setWinners((prevWinners) => prevWinners.concat(player._id));
      }
    });
  }, []);

  async function removeUserInChannel() {
    try {
      await fetch(`${API.URL}/channel/${channelId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          state: 'end',
          channelId,
        }),
      });
    } catch (err) {
      return <ErrorBox message={err.message} />;
    }
  }

  function checkWinner(playerId) {
    return winners?.includes(playerId).toString();
  }

  function getWinnerNames() {
    const winnerNames = players.map((player) => {
      if (winners.includes(player._id)) {
        return `, ${player.userId.name}님`;
      }
    });

    return winnerNames.join(' ').slice(2);
  }

  return (
    <Wrapper>
      <h1 className="vote-title">투표 결과</h1>
      <span className="vote-subtitle">{getWinnerNames()} 축하합니다!</span>
      <div className="characters">
        {winners &&
          players.map((player) => {
            const isWinner = checkWinner(player._id);

            return (
              <Character key={player._id} id={player._id}>
                <div className="img" iswinner={isWinner}>
                  <Image
                    src={player.characterId?.imgUrl}
                    alt="character-image"
                    width={150}
                    height={200}
                  />
                </div>
                <span className="character-name" iswinner={isWinner}>
                  {player.characterId?.name}
                </span>
                <span className="user-name" iswinner={isWinner}>
                  {player.userId?.name}
                </span>
                <span className="voting-result" iswinner={isWinner}>
                  {player.voteCount} 표
                </span>
              </Character>
            );
          })}
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  background-color: black;

  .vote-title {
    margin: 0;
    padding: 30px 0 10px 0;
    font-size: 20px;
    color: white;
  }

  .vote-subtitle {
    padding: 30px 0 30px 0;
    font-weight: 200px;
    font-size: 22px;
    color: ${({ theme }) => theme.pink || 'white'};
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
    width: 153px;
    height: 203px;
    border: none;
  }

  .character-name {
    display: block;
    padding: 10px 0;
    font-size: 18px;
    color: white;
  }

  .user-name {
    background-color: #898bf3;
    padding: 0px 4px;
    border-radius: 5px;
    font-weight: 700;
    font-size: 18px;
    color: ${({ iswinner, theme }) =>
      iswinner === 'true' ? theme.pink : 'white'};
  }

  .voting-result {
    display: block;
    padding: 10px 0;
    font-size: 24px;
    color: white;
  }

  .clicked {
    color: ${({ theme }) => theme.pink};
  }
`;
