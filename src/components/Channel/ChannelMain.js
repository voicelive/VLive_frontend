import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

export default function ChannelMain({ channelInfo }) {
  const { name, episode } = channelInfo;
  return (
    <MainContainer>
      <header>
        <div className="channel-name">{name}</div>
        <div className="episode-title">{episode.title}</div>
      </header>
      <VideoWrapper />
      <ChattingWrapper />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: inline-block;
  height: 800px;
  width: 80%;
  background: gray;

  header {
    display: inline-block;
    height: 10%;
    width: 100%;
    background: yellow;
  }
`;

const VideoWrapper = styled.div`
  display: inline-block;
  height: 55%;
  width: 100%;
  background: blue;
`;

const ChattingWrapper = styled.div`
  display: inline-block;
  height: 30%;
  width: 100%;
  background: green;
`;
