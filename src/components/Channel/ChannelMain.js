import React, { useState, useEffect } from 'react';
import useSWR from 'swr';
import styled from '@emotion/styled';

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

export default function ChannelMain() {
  const [channelInfo, setChannelInfo] = useState({});
  const { data: channel } = useSWR('/channel', fetcher);

  useEffect(() => {
    if (!channel) return;

    const { name, episode } = channel;
    const { title } = episode;

    setChannelInfo({ name, title });
  }, [channel]);

  return (
    <MainContainer>
      {channelInfo && (
        <header>
          <div className="channel-name">{channelInfo.name}</div>
          <div className="episode-title">{channelInfo.title}</div>
        </header>
      )}
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
