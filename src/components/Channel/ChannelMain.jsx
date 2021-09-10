import React from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import useChannel from '../../hooks/useChannel';

import ErrorBox from '../ErrorBox';
import ChatBody from './ChatBody';
import ChatForm from './ChatForm';

export default function ChannelMain() {
  const {
    query: { channelId },
  } = useRouter();
  const { channel, error } = useChannel(channelId);

  if (channelId == null || channel == null) {
    return <></>;
  }

  if (error) {
    return <ErrorBox message={error.message} />;
  }

  const { name, episode } = channel;

  return (
    <MainContainer>
      <header>
        <h2 className="channel-name">{name}</h2>
        <h3 className="episode-title">{episode.title}</h3>
      </header>
      <Video />
      <Chat>
        <ChatBody channelId={channelId} />
        <ChatForm channelId={channelId} />
      </Chat>
    </MainContainer>
  );
}

ChannelMain.propTypes = {
  channelId: PropTypes.string,
};

ChannelMain.defaultProps = {
  channelId: '',
};

const MainContainer = styled.div`
  width: 80%;
  height: auto;
  background-color: rgba(0, 0, 0, 0.6);

  header {
    padding-left: 20px;
    text-align: left;
    background-color: rgba(0, 0, 0, 0.6);
    color: #ffffff;
    border: 1px solid black;
  }

  .channel-name {
    margin: 0px;
    padding-top: 15px;
    padding-bottom: 10px;
    font-size: 1.2em;
    font-weight: 200;
  }

  .episode-title {
    margin: 0px;
    padding-bottom: 10px;
    font-size: 1.5em;
    font-weight: 500;
  }
`;

const Video = styled.div`
  width: 100%;
  height: 55%;
  background-image: url('/images/background.jpg');
`;

const Chat = styled.div`
  height: 35%;
`;
