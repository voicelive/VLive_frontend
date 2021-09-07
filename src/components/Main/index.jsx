import React, { useState } from 'react';
import styled from '@emotion/styled';
import useChannels from '../../hooks/useChannels';
import Link from 'next/link';

import Header from '../Header';
import ChannelItem from '../ChannelItem';
import UserProfile from './UserProfile';
import Preview from './Preview';
import Button from '../Button';
import Modal from '../Modal';
import CreateChannel from '../CreateChannel';
import ErrorBox from '../ErrorBox';

export default function Main() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { activeChannels, error } = useChannels();

  if (error) {
    return <ErrorBox />;
  }

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <Wrapper>
      <MainContainer>
        <Header />
        {activeChannels?.map((channel) => (
          <Link href={`/channel/${channel._id}`} key={channel._id} passHref>
            <a>
              <ChannelItem channel={channel} />
            </a>
          </Link>
        ))}
      </MainContainer>
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
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
`;

const MainContainer = styled.div`
  display: inline-block;
  height: 800px;
  width: 80%;
  border: 1px solid black;
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
