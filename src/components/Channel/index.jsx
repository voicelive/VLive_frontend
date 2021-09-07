import React from 'react';
import styled from '@emotion/styled';

import ChannelMain from './ChannelMain';
import ChannelSide from './ChannelSide';

export default function Channel() {
  return (
    <Container>
      <ChannelMain />
      <ChannelSide />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;
