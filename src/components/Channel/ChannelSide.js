import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import Button from '../Button';

export default function ChannelSide({ channelInfo }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(JSON.parse(sessionStorage.getItem('user')));

    console.log(JSON.parse(sessionStorage.getItem('user')));
  }, []);

  const { host, audience, players } = channelInfo;
  return (
    <SideContainer>
      <PlayerWrapper>
        <div className="player-profile-box">
          {players.map((player, index) => {
            return (
              <div key={index} className="player-profile">
                <div className="player-id">{player.userId}</div>
                <div className="character-id">{player.characterId}</div>
              </div>
            );
          })}
        </div>
      </PlayerWrapper>
      <AudienceWrapper>
        <div className="audience-list">
          <div className="audience">
            {audience.map((user, index) => {
              return (
                <div key={index} className="user-profile">
                  <div className="user-id">{user}</div>
                </div>
              );
            })}
          </div>
        </div>
      </AudienceWrapper>
      <ButtonWrapper>{<Button>Ready</Button>}</ButtonWrapper>
    </SideContainer>
  );
}

ChannelSide.propTypes = {
  host: PropTypes.object,
  players: PropTypes.object,
  audience: PropTypes.array,
};

const SideContainer = styled.div`
  display: inline-block;
  height: 800px;
  width: 20%;
  background: blue;
`;

const PlayerWrapper = styled.div`
  height: 60%;
  width: 100%;
  background: red;

  .player-profile-box {
    padding: 10px;
  }

  .player-profile {
    display: block;
    height: 50px;
    width: 100%;
    background: blue;
    color: white;
  }
`;

const AudienceWrapper = styled.div`
  height: 30%;
  width: 100%;
  background: green;

  .audience-list {
    padding: 10px;
  }

  .audience {
    display: block;
    height: 50px;
    width: 100%;
    background: blue;
    color: white;
  }
`;

const ButtonWrapper = styled.div`
  padding: 20px;
`;
