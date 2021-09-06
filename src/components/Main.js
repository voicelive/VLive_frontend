import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import Header from '../components/Header';
import ChannelsContainer from '../components/ChannelsContainer';
import UserProfile from './UserProfile';
import Preview from '../components/Preview';
import Button from '../components/Button';

export default function Main() {
  return (
    <>
      <MainContainer>
        <Header />
        <ChannelsContainer />
      </MainContainer>
      <SideContainer>
        <UserProfile />
        <Preview />
        <Button>채널 개설하기</Button>
      </SideContainer>
    </>
  );
}

const MainContainer = styled.div`
  display: inline-block;
  height: 800px;
  width: 70%;
  background: red;
`;

const SideContainer = styled.div`
  display: inline-block;
  height: 800px;
  width: 30%;
  background: blue;
`;
