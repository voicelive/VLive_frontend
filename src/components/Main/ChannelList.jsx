import React from 'react';
import styled from '@emotion/styled';
import theme from '../../styles/theme';
import PropTypes from 'prop-types';

import { useSocket } from '../../hooks/socket/useSocket';
import useChannels from '../../hooks/useChannels';

import ChannelItem from './ChannelItem';
import ErrorBox from '../ErrorBox';

export default function ChannelList({ isButtonActive }) {
  const { activeChannels, error, mutate } = useChannels();
  useSocket('listen create channel', (channel) => {
    mutate([...activeChannels, channel]);
  });

  if (error) {
    return <ErrorBox message={error.message} />;
  }

  return (
    <ListBox>
      {activeChannels?.map((channel) => (
        <div key={channel._id}>
          <ChannelItem channel={channel} isButtonActive={isButtonActive} />
        </div>
      ))}
    </ListBox>
  );
}

ChannelList.propTypes = {
  isButtonActive: PropTypes.boolean,
};

const ListBox = styled.div`
  display: inline-block;
  width: 80%;
  overflow: scroll;
  padding: 30px 100px;
  background: linear-gradient(
      to right,
      ${theme.darkNavy},
      ${theme.navy},
      ${theme.darkNavy}
    ),
    url('/images/background.jpg');
`;
