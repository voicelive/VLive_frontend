import React, { useState } from 'react';
import styled from '@emotion/styled';
import useChannels from '../../hooks/useChannels';

import UserProfile from './UserProfile';
import Preview from './Preview';
import CreateChannel from '../CreateChannel';
import ChannelList from './ChannelList';
import Button from '../Button';
import Modal from '../Modal';
import ErrorBox from '../ErrorBox';

export default function Main() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { activeChannels, error } = useChannels();

  if (error) {
    return <ErrorBox message={error.message} />;
  }

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <Container>
      <ChannelList loadedChannels={activeChannels} />
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
  border: 1px solid black;
  text-align: center;

  .button-wrapper {
    position: absolute;
    text-align: center;
    bottom: 10px;
    width: 100%;
  }
`;
