import React, { useState } from 'react';
import Link from 'next/link';
import { useSocket } from '../../hooks/socket/useSocket';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import Header from '../Header';
import ChannelItem from '../ChannelItem';

export default function ChannelList({ loadedChannels }) {
  const [channels, setChannels] = useState(loadedChannels);

  useSocket('listen create channel', (channel) => {
    setChannels([...channels, channel]);
  });

  return (
    <MainContainer>
      <Header>V-Live</Header>
      {channels?.map((channel) => (
        <Link href={`/channel/${channel._id}`} key={channel._id} passHref>
          <a>
            <ChannelItem channel={channel} />
          </a>
        </Link>
      ))}
    </MainContainer>
  );
}

ChannelList.propTypes = {
  loadedChannels: PropTypes.array,
};

ChannelList.defaultProps = {
  loadedChannels: [],
};

const MainContainer = styled.div`
  display: inline-block;
  height: 800px;
  width: 80%;
  border: 1px solid black;
`;
