import React from 'react';
import styled from '@emotion/styled';
import theme from '../../styles/theme';
import PropTypes from 'prop-types';

import { useSocket } from '../../hooks/socket/useSocket';
import useChannels from '../../hooks/channel/useChannels';

import ChannelItem from './ChannelItem';
import ErrorBox from '../ErrorBox';

const { EVENTS } = require('../../constants/socketEvent');

export default function ChannelList({ loginStatus }) {
  const { activeChannels, error, mutate } = useChannels();

  useSocket(EVENTS.LISTEN_CREATE_CHANNEL, (channel) => {
    mutate([...activeChannels, channel]);
  });

  useSocket(EVENTS.LISTEN_END_CHANNEL, (endChannelId) => {
    const newActiveChannels = activeChannels.filter(
      (activeChannel) => activeChannel._id !== endChannelId,
    );

    mutate(newActiveChannels);
  });

  if (error) {
    return <ErrorBox message={error.message} />;
  }

  return (
    <ListBox>
      {activeChannels?.map((channel) => (
        <div key={channel._id}>
          <ChannelItem channel={channel} loginStatus={loginStatus} />
        </div>
      ))}
    </ListBox>
  );
}

ChannelList.propTypes = {
  loginStatus: PropTypes.bool,
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
