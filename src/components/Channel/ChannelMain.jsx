import React, { useState, useEffect } from 'react';
import useChannel from '../../hooks/useChannel';
import styled from '@emotion/styled';

export default function ChannelMain({ channelId }) {
  const [channelInfo, setChannelInfo] = useState(null);
  const channel = useChannel(channelId);

  useEffect(() => {
    if (!channel) return;

    setChannelInfo(channel);
  }, [channel]);

  return (
    <MainContainer>
      {channelInfo !== null ? (
        <header>
          <div className="channel-name">{channelInfo.name}</div>
          <div className="episode-title">{channelInfo.episode.title}</div>
        </header>
      ) : null}
      <VideoWrapper />
      <ChattingWrapper />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 80%;
  height: 800px;
  border: 1px solid black;

  header {
    width: 100%;
    height: 10%;
    border: 1px solid black;
  }
`;

const VideoWrapper = styled.div`
  width: 100%;
  height: 55%;
  border: 1px solid black;
`;

const ChattingWrapper = styled.div`
  width: 100%;
  height: 30%;
  border: 1px solid black;
`;
