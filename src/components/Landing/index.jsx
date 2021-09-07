import React from 'react';
import styled from '@emotion/styled';
import useChannels from '../../hooks/useChannels';
import Link from 'next/link';

import Header from '../Header';
import HistoryItem from './HistoryItem';
import Button from '../Button';

export default function Landing() {
  const { historyChannels, error } = useChannels();

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
      <Header />
      <h2 className="recent-game">RECENT GAME</h2>

      <HistoryContainer>
        {historyChannels?.map((channel) => (
          <HistoryItem key={channel._id} channel={channel} />
        ))}
      </HistoryContainer>
      <ButtonContainer>
        <Link href="/main" passHref>
          <Button>게임하러가기</Button>
        </Link>
      </ButtonContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  text-align: center;
  background-image: linear-gradient(
      rgba(5, 5, 5, 0.746),
      rgba(58, 57, 57, 0.842),
      rgba(100, 98, 98, 0.5),
      rgba(58, 57, 57, 0.842),
      rgba(5, 5, 5, 0.746)
    ),
    url('/images/background.jpg');
  height: 100vh;

  .recent-game {
    color: white;
  }
`;

const HistoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background: #1d1d2985;
  border-radius: 20px;
  height: 500px;
  width: 600px;
  overflow: visible;
`;

const ButtonContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  margin-top: 60px;
`;
