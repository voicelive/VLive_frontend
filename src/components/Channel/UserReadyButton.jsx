import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import useChannel from '../../hooks/useChannel';
import ErrorBox from '../ErrorBox';
import Button from '../Button';

const baseUrl = process.env.NEXT_PUBLIC_API_URL;

export default function UserReadyButton({ isModalOpen, closeModal }) {
  const [episodeInfo, setEpisodeInfo] = useState([]);
  const [userRole, setUserRole] = useState({ characterId: '' });
  const {
    query: { channelId },
  } = useRouter();
  const { channel, error } = useChannel(channelId);

  if (!channelId || !channel) {
    return <></>;
  }

  if (error) {
    return <ErrorBox message={error.message} />;
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `${baseUrl}/episode/${channel.episode._id}`,
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
            },
          },
        );
        const { result, data, message } = await response.json();

        if (result === 'error') {
          return alert(message);
        }

        setEpisodeInfo(data);
      } catch (err) {
        console.error(err.message);
      }
    }

    fetchData();
  }, [isModalOpen]);

  const { title, characters } = episodeInfo;

  function handleClick({ currentTarget }) {
    const { id } = currentTarget;

    setUserRole({
      ['characterId']: id,
    });
  }

  async function handleSubmit(ev) {
    ev.preventDefault();
    const { _id } = JSON.parse(sessionStorage.getItem('user'));

    try {
      const response = await fetch(`${baseUrl}/channel/${channelId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          state: 'character',
          userId: _id,
          characterId: userRole.characterId,
        }),
      });
      const { result, message } = await response.json();

      if (result === 'error') {
        return alert(message);
      }
    } catch (err) {
      alert(err.message);
    }
  }

  return (
    <Container>
      <div className="header">
        <span className="title">역할고르기</span>
        <button type="button" onClick={closeModal}>
          나가기
        </button>
      </div>
      <CreatingForm onSubmit={handleSubmit}>
        <span className="episode-select">연기할 배역을 선택하세요</span>
        <div className="episode-title">{title}</div>
        <EpisodeOptions>
          <ul className="episode-list">
            {characters &&
              characters.map((character) => (
                <EpisodeOption
                  key={character._id}
                  id={character._id}
                  onClick={handleClick}
                >
                  <span className="episode-title">{character.name}</span>
                </EpisodeOption>
              ))}
          </ul>
        </EpisodeOptions>
        <div className="button">
          <Button type="submit">Ready</Button>
        </div>
      </CreatingForm>
    </Container>
  );
}

UserReadyButton.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
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

const CreatingForm = styled.form`
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
    margin: 10px auto 0 auto;
  }
`;

const ChannelName = styled.div`
  height: 80px;
  .channel-name {
    font-size: 16px;
  }
  input {
    width: 300px;
    margin-top: 10px;
    padding: 5px 10px;
  }
`;

const EpisodeOptions = styled.div`
  margin-top: 10px;
  .episode-select {
    font-size: 16px;
  }
  .episode-list {
    display: grid;
    grid-template-columns: repeat(3, minmax(100px, 170px));
    padding: 0;
  }
`;

const EpisodeOption = styled.li`
  display: flex;
  flex-direction: column;
  height: 100px;
  margin: 0 15px 20px 0;
  font-size: 12px;
  list-style: none;
  cursor: pointer;
  .episode-title {
    margin-bottom: 5px;
  }
`;
