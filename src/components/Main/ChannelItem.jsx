import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import PlayerEntryButton from './PlayerEntryButton';

export default function ChannelItem({
  channel: { _id, name, episode, isPlaying },
  loginStatus,
}) {
  return (
    <Container isPlaying={isPlaying}>
      <div className={`state ${isPlaying ? 'onAir' : 'waiting'}`}>
        {isPlaying ? 'ONAIR' : 'WAITING'}
      </div>
      <div className="title-box">
        <h3 className="title">{name}</h3>
        <p className="episode-title">{episode.title}</p>
      </div>
      <PlayerEntryButton channelId={_id} isActive={loginStatus}>
        플레이어 입장
      </PlayerEntryButton>
    </Container>
  );
}

ChannelItem.propTypes = {
  channel: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isPlaying: PropTypes.bool.isRequired,
    episode: PropTypes.PropTypes.shape({
      title: PropTypes.string.isRequired,
    }),
  }),
  loginStatus: PropTypes.bool.isRequired,
};

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: auto;
  padding: 0 15px;
  text-align: center;
  max-width: 80%;
  height: 150px;
  margin-top: 60px;
  border: 2px solid
    ${({ isPlaying, theme }) => (isPlaying ? theme.pink : theme.blue)};
  box-shadow: ${({ isPlaying, theme }) =>
    isPlaying ? theme.pinkShadow : theme.blueShadow};
  background-color: ${({ isPlaying, theme }) =>
    isPlaying ? theme.onAirBg : theme.waitingBg};

  .title-box {
    text-align: left;
    width: 450px;
  }

  .state.onAir,
  .state.waiting {
    position: absolute;
    top: -30px;
    left: -10px;
    width: 110px;
    height: 40px;
    line-height: 50px;
    color: gray;
    font-weight: 700;
    font: italic bold 30px/30px godic;
  }

  .state.onAir {
    color: ${({ theme }) => theme.pink};
    text-shadow: 0 0 5px #ffffffb7, 0 0 5px #ffffff8b, 0 0 10px #ffffffc7;
  }

  .title {
    font-size: 1.6em;
    color: white;
    font-weight: 400;
  }

  .episode-title {
    color: #bbbbbb;
    font-size: 1.3em;
    font-weight: 300;
    margin-top: -12px;
  }
`;
