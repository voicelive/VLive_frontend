import React from 'react';
import styled from '@emotion/styled';

import PlayerContainer from './PlayerContainer';
import SideButtonContainer from './SideButtonContainer';

export default function ChannelSide() {
  return (
    <SideContainer>
      <PlayerContainer />
      <SideButtonContainer />
    </SideContainer>
  );
}

const SideContainer = styled.div`
  width: 30%;
  height: auto;
  background: #1d2e3c;
`;
