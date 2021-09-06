import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import Header from '../components/Header';
import ChannelItem from '../components/ChannelItem';
import UserProfile from './UserProfile';
import Preview from '../components/Preview';
import Button from '../components/Button';

export default function Main() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const [channels, setChannels] = useState([]);

  useEffect(async () => {
    try {
      const response = await fetch(`${baseUrl}/channel`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const { data } = await response.json();

      setChannels(data.channels);
    } catch (err) {
      console.error(err);
    }
  }, []);

  return (
    <Wrapper>
      <MainContainer>
        <Header />
        {channels?.map((channel) => {
          return <ChannelItem key={channel._id} channel={channel} />;
        })}
      </MainContainer>
      <SideContainer>
        <UserProfile />
        <Preview />
        <Button>채널 개설하기</Button>
      </SideContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
`;

const MainContainer = styled.div`
  display: inline-block;
  height: 800px;
  width: 80%;
  border: 1px solid black;
`;

const SideContainer = styled.div`
  display: inline-block;
  height: 800px;
  width: 20%;
  border: 1px solid black;
`;
