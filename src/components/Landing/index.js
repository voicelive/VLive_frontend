import React from 'react';
import styled from '@emotion/styled';
import useGetChannels from '../../hooks/useGetChannels';
import Link from 'next/link';

import Header from '../../components/Header';
import ChannelItem from '../../components/ChannelItem';
import Button from '../../components/Button';

export default function Landing() {
  const { historyChannels, error } = useGetChannels();

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
      <HistoryContainer>
        {historyChannels?.map((channel) => {
          return <ChannelItem key={channel._id} channel={channel} />;
        })}
      </HistoryContainer>
      <Link href="/main" passHref>
        <Button>게임하러가기</Button>
      </Link>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;
`;

const HistoryContainer = styled.div`
  display: flex;

  div {
    width: 500px;
  }
`;
