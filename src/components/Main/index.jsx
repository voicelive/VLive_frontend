import React, { useState } from 'react';
import styled from '@emotion/styled';
import useChannels from '../../hooks/useChannels';
import Link from 'next/link';
import theme from '../../styles/theme';

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
    return <ErrorBox message={error.message} />;
  }

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <Header>V-Live</Header>
      <MainContainer>
        <ListBox>
          {activeChannels?.map((channel) => (
            <Link href={`/channel/${channel._id}`} key={channel._id} passHref>
              <a>
                <ChannelItem channel={channel} />
              </a>
            </Link>
          ))}
        </ListBox>
        <SideBox>
          <UserProfile />
          <Preview />
          <div className="button-wrapper">
            <Button onClick={openModal} width="200px" fontSize="1em">
              채널 개설하기
            </Button>
          </div>
        </SideBox>
      </MainContainer>
      {isModalOpen && (
        <Modal closeModal={closeModal}>
          <CreateChannel closeModal={closeModal} isModalOpen={isModalOpen} />
        </Modal>
      )}
    </>
  );
}

const MainContainer = styled.div`
  height: 90vh;
  display: flex;
  width: 100%;
`;

const ListBox = styled.div`
  display: inline-block;
  width: 80%;
  overflow: scroll;
  padding: 30px 100px;
  background: linear-gradient(
      to right,
      ${theme.darkNavy},
      ${theme.navy},
      ${theme.darkNavy}
    ),
    url('/images/background.jpg');
`;

const SideBox = styled.div`
  position: relative;
  display: inline-block;
  width: 20%;
  text-align: center;
  background: ${theme.navy};

  .button-wrapper {
    position: absolute;
    text-align: center;
    bottom: 10px;
    width: 100%;
    margin-bottom: 20px;
  }
`;
