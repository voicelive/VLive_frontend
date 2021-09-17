import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import Image from 'next/image';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import { getSocketClient } from '../../hooks/socket/useSocket';
import useChannel from '../../hooks/channel/useChannel';

import { EVENTS } from '../../constants/socketEvent';

import Button from '../Button';
import ErrorBox from '../ErrorBox';
import theme from '../../styles/theme';

import { API } from '../../constants/api';
import { ALERT_MSG } from '../../constants/alertMessage';

export default function CharacterSelection({
  isModalOpen,
  closeModal,
  selectedCharacters,
}) {
  const [episode, setEpisode] = useState([]);
  const [currentCharacter, setCurrentCharacter] = useState(null);
  const [fetchError, setFetchError] = useState(null);
  const {
    query: { channelId },
  } = useRouter();
  const { channel, error } = useChannel(channelId);

  if (channelId == null || channel == null) {
    return null;
  }

  if (error || fetchError) {
    if (error) {
      return <ErrorBox message={error.message} />;
    }

    return <ErrorBox message={fetchError.message} />;
  }

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          `${API.URL}/episode/${channel.episode._id}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          },
        );
        const { result, data, message } = await response.json();

        if (result === 'error') {
          throw new Error(message);
        }

        setEpisode(data);
      } catch (err) {
        setFetchError(err);
      }
    })();
  }, [isModalOpen]);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!currentCharacter) {
      return alert(ALERT_MSG.SELECTION_REQUIRED);
    }

    const { _id } = JSON.parse(sessionStorage.getItem('user'));

    try {
      const response = await fetch(`${API.URL}/channel/${channelId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          state: 'character',
          userId: _id,
          characterId: currentCharacter,
        }),
      });
      const { result, message } = await response.json();

      if (result === 'error') {
        throw new Error(message);
      }

      socketClient.emit(EVENTS.PLAYER_READY, {
        userId: _id,
        characterId: currentCharacter,
        channelId,
        episode,
      });

      closeModal();
    } catch (err) {
      setFetchError(err);
    }
  }

  function handleSelectCharacter({ currentTarget: { id } }) {
    if (selectedCharacters.includes(id)) {
      return alert(ALERT_MSG.SELECTION_FAIL);
    }

    setCurrentCharacter(id);
  }

  return (
    <Container>
      <div className="header">
        <span className="title">역할고르기</span>
        <button type="button" onClick={closeModal}>
          나가기
        </button>
      </div>
      <ReadyForm onSubmit={handleSubmit}>
        <span className="description">연기할 배역을 선택하세요</span>
        <div className="episode-title">{episode.title}</div>
        <ReadyOptions>
          <ul className="character-list">
            {episode.characters?.map((character) => (
              <ReadyOption
                key={character._id}
                id={character._id}
                onClick={handleSelectCharacter}
              >
                <span className="character-name">{character.name}</span>
                <div
                  className={
                    currentCharacter === character._id ? 'select' : null
                  }
                >
                  <Image
                    src={character.imgUrl}
                    alt="character-img"
                    width={90}
                    height={100}
                    layout="responsive"
                  />
                </div>
              </ReadyOption>
            ))}
          </ul>
        </ReadyOptions>
        <div className="button">
          <Button type="submit">배역 고르기</Button>
        </div>
      </ReadyForm>
    </Container>
  );
}

CharacterSelection.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  selectedCharacters: PropTypes.array.isRequired,
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid white;
  background-color: ${({ theme }) => theme.navy};
  color: white;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 10%;
    margin-top: 25px;
    padding: 0 50px;

    .title {
      font-size: 24px;
      line-height: 24px;
    }
  }
`;

const ReadyForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 90%;
  padding: 30px 50px;
  box-sizing: border-box;
  text-align: left;

  .channel-name {
    display: block;
  }

  .button {
    margin: 25px auto 0 auto;
  }
`;

const ReadyOptions = styled.div`
  margin-top: 10px;

  .description {
    font-size: 16px;
  }

  .character-list {
    display: grid;
    grid-template-columns: repeat(3, minmax(100px, 170px));
    padding: 0;
  }

  .select {
    border: 2px solid ${theme.pink};
  }

  .image {
    margin-top: 10px;
  }
`;

const ReadyOption = styled.li`
  display: flex;
  flex-direction: column;
  height: 150px;
  margin: 0 15px 20px 0;
  font-size: 12px;
  list-style: none;
  cursor: pointer;

  .character-name {
    margin-bottom: 5px;
  }
`;
