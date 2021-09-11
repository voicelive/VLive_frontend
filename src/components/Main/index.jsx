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
      <Header>V-Live</Header>
      <MainContainer>
        <ChannelList loginStatus={isLogin} />
        <SideBox>
          <UserProfile
            onLogin={() => setIsLogin(true)}
            onLogout={() => setIsLogin(false)}
            loginStatus={isLogin}
          />
          <Preview />
          <div className={`button-wrapper ${!isLogin && 'disable'}`}>
            <Button
              onClick={openModal}
              width="200px"
              fontSize="1em"
              color={!isLogin && 'gray'}
            >
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

const SideBox = styled.div`
  position: relative;
  display: inline-block;
  width: 20%;
  text-align: center;
  background: ${theme.navy};
  .button-wrapper {
    position: absolute;
    width: 100%;
    margin-bottom: 20px;
  }
  .disable {
    cursor: not-allowed;
    pointer-events: none;
  }
`;
