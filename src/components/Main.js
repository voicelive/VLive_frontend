import React, { useState } from 'react';
import styled from '@emotion/styled';
import useChannels from '../hooks/useChannels';
import Link from 'next/link';

import Header from '../components/Header';
import ChannelItem from '../components/ChannelItem';
import UserProfile from './UserProfile';
import Preview from '../components/Preview';
import Button from '../components/Button';

export default function Main() {
  const [error, setError] = useState(null);
  const { channels } = useChannels();

  if (error) {
    return (
      <>
        <h2>{error}</h2>
        <Link href="/" passHref>
          <Button color="red">홈으로 돌아가기</Button>
        </Link>
      </>
    );
  }

  return (
    <Wrapper>
      <MainContainer>
        <Header />
        {channels?.map((channel) => (
          <Link href={`/channel/${channel._id}`} key={channel._id} passHref>
            <a>
              <ChannelItem channel={channel} />
            </a>
          </Link>
        ))}
      </MainContainer>
      <SideContainer>
        <UserProfile setError={setError} />
        <Preview setError={setError} />
        <div className="button-wrapper">
          <Button>채널 개설하기</Button>
        </div>
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
  position: relative;
  display: inline-block;
  height: 800px;
  width: 20%;
  border: 1px solid black;
  text-align: center;

  .button-wrapper {
    position: absolute;
    text-align: center;
    bottom: 10px;
    width: 100%;
  }
`;
