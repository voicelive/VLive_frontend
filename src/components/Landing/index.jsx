import React from 'react';
import styled from '@emotion/styled';
import useChannels from '../../hooks/useChannels';
import Link from 'next/link';

import Header from '../Header';
import HistoryItem from './HistoryItem';
import Button from '../Button';
import ErrorBox from '../ErrorBox';

export default function Landing() {
  const { historyChannels, error } = useChannels();

  if (error) {
    return <ErrorBox message={error.message} />;
  }

  return (
    <Container>
      <Header>V-Live</Header>
      <h2 className="recent-game">RECENT GAME</h2>
      <HistoryWrapper>
        {historyChannels?.map((channel) => (
          <Link href={`/history/${channel._id}`} key={channel._id} passHref>
            <a>
              <HistoryItem channel={channel} />
            </a>
          </Link>
        ))}
      </HistoryWrapper>
      <ButtonWrapper>
        <Link href="/main" passHref>
          <a>
            <Button>게임하러가기</Button>
          </a>
        </Link>
      </ButtonWrapper>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  text-align: center;
  height: 100vh;
  background-image: linear-gradient(
      rgba(5, 5, 5, 0.746),
      rgba(58, 57, 57, 0.842),
      rgba(100, 98, 98, 0.5),
      rgba(58, 57, 57, 0.842),
      rgba(5, 5, 5, 0.746)
    ),
    url('/images/background.jpg');

  .recent-game {
    color: white;
  }
`;

const HistoryWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  height: 500px;
  width: 600px;
  background: #1d1d2985;
  border-radius: 20px;
  overflow: visible;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
`;
