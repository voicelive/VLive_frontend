import React, { useState } from 'react';
import styled from '@emotion/styled';

import UserProfile from './UserProfile';
import Preview from './Preview';
import CreateChannel from '../CreateChannel';
import ChannelList from './ChannelList';
import Button from '../Button';
import Modal from '../Modal';

export default function Main() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <Container>
      <ChannelList />
      <SideContainer>
        <UserProfile />
        <Preview />
        <div className="button-wrapper">
          <Button onClick={openModal}>채널 개설하기</Button>
        </div>
      </SideContainer>
      {isModalOpen && (
        <Modal closeModal={closeModal}>
          <CreateChannel closeModal={closeModal} isModalOpen={isModalOpen} />
        </Modal>
      )}
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;

const SideContainer = styled.div`
  position: relative;
  display: inline-block;
  height: 800px;
  width: 20%;
  text-align: center;
  border: 1px solid black;
  .button-wrapper {
    position: absolute;
    width: 100%;
    bottom: 10px;
    text-align: center;
  }
`;
