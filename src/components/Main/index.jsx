import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import theme from '../../styles/theme';

import Header from '../Header';
import UserProfile from './UserProfile';
import Preview from './Preview';
import CreateChannel from './CreateChannel';
import ChannelList from './ChannelList';
import Button from '../Button';
import Modal from '../Modal';

export default function Main() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    setIsLogin(!!sessionStorage.getItem('user'));
  }, []);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <>
      <Header>VLIVE</Header>
      <MainContainer>
        <ChannelList loginStatus={isLogin} />
        <SideBox>
          <UserProfile
            onLogin={() => setIsLogin(true)}
            onLogout={() => setIsLogin(false)}
            loginStatus={isLogin}
          />
          <Preview />
          <CreateButton isLogin={isLogin}>
            <Button
              onClick={openModal}
              width="200px"
              fontSize="1em"
              color={!isLogin ? 'gray' : null}
            >
              채널 개설하기
            </Button>
          </CreateButton>
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

const SideBox = styled.div`
  position: relative;
  display: inline-block;
  width: 25%;
  text-align: center;
  background-size: cover;
  background-image: linear-gradient(
      rgba(5, 3, 19, 0.801),
      rgba(5, 3, 19, 0.788),
      rgba(5, 3, 19, 0.568),
      rgba(5, 3, 19, 0.788),
      rgba(5, 3, 19, 0.801)
    ),
    url('/images/11.jpg');

  .disable {
    cursor: not-allowed;
    pointer-events: none;
  }
`;

const CreateButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 15%;
  cursor: ${({ isLogin }) => (!isLogin ? 'not-allowed' : 'pointer')};
  pointer-events: ${({ isLogin }) => (!isLogin ? 'none' : 'auto')};
`;
