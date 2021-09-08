import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import useChannel from '../../hooks/useChannel';

export default function ChannelMain() {
  const [channelInfo, setChannelInfo] = useState(null);
  const {
    query: { channelId },
  } = useRouter();
  const channel = useChannel(channelId);

  useEffect(() => {
    if (!channel) return;

    setChannelInfo(channel);
  }, [channel]);

  return (
    <MainContainer>
      {channelInfo !== null ? (
        <header>
          <h2 className="channel-name">{channelInfo.name}</h2>
          <h3 className="episode-title">
            sdcksdjcn{channelInfo.episode.title}
          </h3>
        </header>
      ) : null}
      <VideoWrapper />
      <ChattingWrapper />
    </MainContainer>
  );
}

const MainContainer = styled.div`
  width: 80%;
  height: auto;
  background-color: rgba(0, 0, 0, 0.6);

  header {
    padding-left: 20px;
    background-color: rgba(0, 0, 0, 0.6);
    color: #ffffff;
    border: 1px solid black;
  }

  h2 {
    margin: 0px;
    padding-top: 10px;
    padding-bottom: 10px;
    text-align: left;
    font-size: 1.2em;
    font-weight: 200;
  }

  h3 {
    margin: 0px;
    padding-bottom: 10px;
    text-align: left;
    font-size: 1.5em;
    font-weight: 500;
  }
`;

const VideoWrapper = styled.div`
  width: 100%;
  height: 55%;
  background-image: url('/images/background.jpg');
`;

const ChattingWrapper = styled.div`
  width: 100%;
  height: 30%;
  background: #1d2e3c;
  opacity: 0.8;
  border: 1px solid black;
`;
