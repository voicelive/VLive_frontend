import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import useChannel from '../../hooks/channel/useChannel';

import ErrorBox from '../ErrorBox';
import Button from '../Button';
import PlayerContainer from './PlayerContainer';
import AudienceContainer from './AudienceContainer';

export default function ChannelSide() {
  const {
    query: { channelId },
  } = useRouter();
  const { channel, error } = useChannel(channelId);
  const [isHost, setIsHost] = useState(false);

  useEffect(() => {
    if (!channel) return;

    const user = JSON.parse(sessionStorage.getItem('user'));

    setIsHost(user._id === channel.host);
  }, []);

  if (channelId == null || channel == null) {
    return <></>;
  }

  if (error) {
    return <ErrorBox message={error.message} />;
  }

  return (
    <SideContainer>
      <PlayerContainer />
      <AudienceContainer />
      <ButtonWrapper>
        {isHost ? <Button>Start</Button> : <Button>Ready</Button>}
        <Button>나가기</Button>
      </ButtonWrapper>
    </SideContainer>
  );
}

const SideContainer = styled.div`
  width: 20%;
  height: auto;
  background: #1d2e3c;
  opacity: 0.8;
`;

const ButtonWrapper = styled.div`
  padding: 10px;
`;
