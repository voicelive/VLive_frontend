import React, { useState, useEffect } from 'react';
import useParams from 'react-router-dom';
import useSWR from 'swr';
import styled from '@emotion/styled';
import Button from '../Button';

async function fetcher() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const channelId = useParams();

  try {
    const response = await fetch(`${baseUrl}/channel/${channelId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const { data } = await response.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}

export default function ChannelSide() {
  const [currentUsers, setCurrentUsers] = useState([]);
  const [players, setPlayers] = useState(null);
  const [audience, setAudience] = useState(null);
  const [host, setHost] = useState(null);
  const { data: channel } = useSWR('/channel', fetcher);

  useEffect(() => {
    if (!channel) return;

    const { players, audience, host } = channel;

    setPlayers(players);
    setAudience(audience);
    setHost(host);
  }, [channel]);

  useEffect(() => {
    const userId = JSON.parse(sessionStorage.getItem('user'));

    setCurrentUsers(currentUsers.concat(userId));
  }, []);

  return (
    <SideContainer>
      <PlayerWrapper>
        <div className="player-profile-list">
          {players?.map((player) => {
            return (
              <div key={player.userId} className="player-profile">
                <div className="player">{player.userId}</div>
                <div className="character">{player.characterId}</div>
              </div>
            );
          })}
        </div>
      </PlayerWrapper>
      <AudienceWrapper>
        <div className="audience-list">
          <div className="audience">
            {audience?.map((user) => {
              return (
                <div key={user.id} className="user-profile">
                  <div className="user-id">{user}</div>
                </div>
              );
            })}
          </div>
        </div>
      </AudienceWrapper>
      <ButtonWrapper>
        {currentUsers[0] === host ? (
          <Button>Start</Button>
        ) : (
          <Button>Ready</Button>
        )}
        <Button>나가기</Button>
      </ButtonWrapper>
    </SideContainer>
  );
}

const SideContainer = styled.div`
  display: inline-block;
  height: 800px;
  width: 20%;
  border: 1px solid black;
`;

const PlayerWrapper = styled.div`
  height: 55%;
  width: 100%;
  border: 1px solid black;

  .player-profile-list {
    padding: 10px;
    height: 90%;
    border: 1px solid black;
  }

  .player-profile {
    display: block;
    height: 50px;
    width: 100%;
    border: 1px solid black;
  }
`;

const AudienceWrapper = styled.div`
  height: 30%;
  width: 100%;
  border: 1px solid black;

  .audience-list {
    padding: 10px;
    height: 80%;
    border: 1px solid black;
  }
`;

const ButtonWrapper = styled.div`
  padding: 10px;
`;
