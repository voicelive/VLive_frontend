import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import styled from '@emotion/styled';
import Button from '../Button';

async function fetcher() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const channelId = '6135b03f428aabe0cf791289';

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
        {players?.map((player) => (
          <div key={player.userId} className="player-profile">
            <div className="player">{player.userId}</div>
            <div className="character">{player.characterId}</div>
          </div>
        ))}
      </PlayerWrapper>
      <AudienceWrapper>
        {audience?.map((user) => (
          <div key={user.id} className="user-id">
            {user}
          </div>
        ))}
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
  width: 20%;
  height: 800px;
  border: 1px solid black;
`;

const PlayerWrapper = styled.div`
  width: 100%;
  height: 55%;
  border: 1px solid black;

  .player-profile {
    width: 100%;
    height: 50px;
    border: 1px solid black;
  }
`;

const AudienceWrapper = styled.div`
  width: 100%;
  height: 30%;
  border: 1px solid black;
`;

const ButtonWrapper = styled.div`
  padding: 10px;
`;
