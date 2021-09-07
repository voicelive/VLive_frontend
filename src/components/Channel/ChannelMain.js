import React, { useState, useEffect } from 'react';
import useParams from 'react-router-dom';
import useSWR from 'swr';
import styled from '@emotion/styled';

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
  display: inline-block;
  height: 800px;
  width: 80%;
  border: 1px solid black;

  header {
    display: inline-block;
    height: 10%;
    width: 100%;
    border: 1px solid black;
  }
`;

const VideoWrapper = styled.div`
  display: inline-block;
  height: 55%;
  width: 100%;
  border: 1px solid black;
`;

const ChattingWrapper = styled.div`
  display: inline-block;
  height: 30%;
  width: 100%;
  border: 1px solid black;
`;
