import React from 'react';
import styled from '@emotion/styled';
import ChannelMain from './ChannelMain';
import ChannelSide from './ChannelSide';

export default function ChannelContainer() {
  return (
    <div>
      <Container>
        <ChannelMain />
        <ChannelSide />
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: flex;
`;
