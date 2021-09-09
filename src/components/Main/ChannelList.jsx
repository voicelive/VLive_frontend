import React from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

import { useSocket } from '../../hooks/socket/useSocket';
import useChannels from '../../hooks/useChannels';

import Header from '../Header';
import ChannelItem from '../ChannelItem';
import ErrorBox from '../ErrorBox';

export default function ChannelList() {
  const { activeChannels, error, mutate } = useChannels();

  useSocket('listen create channel', (channel) => {
    mutate([...activeChannels, channel]);
  });

  if (error) {
    return <ErrorBox message={error.message} />;
  }

  return (
    <MainContainer>
      <Header>V-Live</Header>
      {activeChannels?.map((channel) => (
        <Link href={`/channel/${channel._id}`} key={channel._id} passHref>
          <a>
            <ChannelItem channel={channel} />
          </a>
        </Link>
      ))}
    </MainContainer>
  );
}

const MainContainer = styled.div`
  display: inline-block;
  height: 800px;
  width: 80%;
  border: 1px solid black;
`;
