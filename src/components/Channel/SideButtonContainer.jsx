import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import theme from '../../styles/theme';

import useChannel from '../../hooks/channel/useChannel';
import { useSocket, socketClient } from '../../hooks/socket/useSocket';
import { API } from '../../constants/api';
import { EVENTS } from '../../constants/socketEvent';

import CharacterSelection from './CharacterSelection';
import Button from '../Button';
import Modal from '../Modal';
import ErrorBox from '../ErrorBox';

export default function SideButtonContainer() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userId, setUserId] = useState(null);
  const [ready, setReady] = useState(false);
  const [selectedCharacters, setSelectedCharacters] = useState([]);
  const {
    query: { channelId },
  } = useRouter();
  const router = useRouter();
  const { channel } = useChannel(channelId);

  useEffect(() => {
    const { _id } = JSON.parse(sessionStorage.getItem('user'));
    setUserId(_id);
  }, []);

  useSocket(EVENTS.LISTEN_PLAYER_READY, ({ characterId }) => {
    setSelectedCharacters((prev) => [...prev, characterId]);
  });

  function openModal() {
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  async function handleClick() {
    try {
      const response = await fetch(`${API.URL}/channel/${channelId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          state: 'exit',
          userId,
        }),
      });

      const { result, message } = response;

      if (result === 'error') {
        throw new Error(message);
      }

      socketClient().emit(EVENTS.EXIT_CHANNEL, { channelId, userId });
      router.push('/main');
    } catch (err) {
      return <ErrorBox message={err.message} />;
    }
  }

  useSocket(EVENTS.LISTEN_GAME_START, (start) => {
    if (start && userId === channel?.host._id) {
      setReady(true);
    }
  });

  async function startGameHandleClick() {
    try {
      const response = await fetch(`${API.URL}/channel/${channelId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          state: 'start',
          channelId,
        }),
      });

      const { result, message } = await response.json();

      if (result === 'error') {
        throw new Error(message);
      }

      socketClient().emit(EVENTS.READY_TO_START, channelId);
    } catch (err) {
      return <ErrorBox message={err.message} />;
    }
  }

  return (
    <ButtonWrapper>
      {ready ? (
        <Button
          onClick={startGameHandleClick}
          bgColor={theme.pink}
          fontsize="18px"
        >
          Start
        </Button>
      ) : (
        <Button onClick={openModal} bgColor={theme.pink} fontsize="18px">
          Ready
        </Button>
      )}
      <Button onClick={handleClick} bgColor={theme.blue} fontsize="18px">
        나가기
      </Button>
      {isModalOpen && (
        <Modal closeModal={closeModal}>
          <CharacterSelection
            selectedCharacters={selectedCharacters}
            closeModal={closeModal}
            isModalOpen={isModalOpen}
          />
        </Modal>
      )}
    </ButtonWrapper>
  );
}

const ButtonWrapper = styled.div`
  width: 20%;
  padding: 20px 0;

  button {
    margin: 20px;
  }

  .ready {
    color: navy;
  }
`;
