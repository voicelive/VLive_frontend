import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';

import useChannel from '../../hooks/channel/useChannel';
import useUserType from '../../hooks/channel/useUserType';
import { socketClient } from '../../hooks/socket/useSocket';
import { API } from '../../constants/api';
import { EVENTS } from '../../constants/socketEvent';

import UserReady from './UserReady';
import Button from '../Button';
import Modal from '../Modal';

export default function SideButtonContainer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userId, setUserId] = useState(null);
  const [ready, setReady] = useState(false);
  const {
    query: { channelId },
  } = useRouter();
  const router = useRouter();

  useEffect(() => {
    const { _id } = JSON.parse(sessionStorage.getItem('user'));
    setUserId(_id);
  }, []);

  const { userType } = useUserType(channelId, userId);
  const { channel, error } = useChannel(channelId);

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  async function handleClick() {
    try {
      await fetch(`${API.URL}/channel/${channelId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          state: 'exit',
          userId,
          type: userType.type,
        }),
      });

      socketClient.emit(EVENTS.EXIT_CHANNEL, { channelId, userId, userType });
      router.push('/main');
    } catch (error) {
      return error;
    }
  }

  socketClient.on(EVENTS.LISTEN_PLAYER_READY, (start) => {
    if (start && userId === channel?.host._id) {
      setReady(true);
    }
  });

  async function startGameHandleClick() {
    try {
      await fetch(`${API.URL}/channel/${channelId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          state: 'start',
          channelId,
        }),
      });

      socketClient.emit(EVENTS.READY_TO_START, channelId);
    } catch (error) {
      return error;
    }
  }

  return (
    <ButtonWrapper>
      <div className="button-wrapper">
        {ready ? (
          <Button onClick={startGameHandleClick}>Start</Button>
        ) : (
          <Button onClick={openModal}>Ready</Button>
        )}
        <Button onClick={handleClick}>나가기</Button>
      </div>
      {isModalOpen && (
        <Modal closeModal={closeModal}>
          <UserReady closeModal={closeModal} isModalOpen={isModalOpen} />
        </Modal>
      )}
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.div`
  padding: 10px;

  .ready {
    color: navy;
  }
`;
