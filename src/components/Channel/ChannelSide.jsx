import React from 'react';
import styled from '@emotion/styled';

import PlayerContainer from './PlayerContainer';
import AudienceContainer from './AudienceContainer';
import SideButtonContainer from './SideButtonContainer';

export default function ChannelSide() {
  return (
    <SideContainer>
      <PlayerContainer />
      <AudienceContainer />
      <SideButtonContainer />
    </SideContainer>
  );
}

const SideContainer = styled.div`
  width: 30%;
  height: auto;
  background: #1d2e3c;
`;
