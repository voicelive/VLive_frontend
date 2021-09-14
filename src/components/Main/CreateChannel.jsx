import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import { socketClient } from '../../hooks/socket/useSocket';
import Image from 'next/image';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import Button from '../Button';
import { API } from '../../constants/api';
import { EVENTS } from '../../constants/socketEvent';

export default function CreateChannel({ isModalOpen, closeModal }) {
  const [episodes, setEpisodes] = useState([]);
  const [inputValue, setInputValue] = useState({
    name: '',
    episodeId: '',
  });
  const router = useRouter();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${API.URL}/episode`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
        const { result, data, message } = await response.json();

        if (result === 'error') {
          return alert(message);
        }

        setEpisodes(data);
      } catch (err) {
        alert(err.message);
      }
    }

    fetchData();
  }, [isModalOpen]);

  async function submitData(ev) {
    ev.preventDefault();

    const { name, episodeId } = inputValue;
    const { _id } = JSON.parse(sessionStorage.getItem('user'));

    try {
      const response = await fetch(`${API.URL}/channel`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, episodeId, host: _id }),
      });
      const { result, data, message } = await response.json();

      if (result === 'error') {
        return alert(message);
      }

      socketClient.emit(EVENTS.CREATE_CHANNEL, data);

      const channelId = data._id;
      router.push(`/channel/${channelId}`);
    } catch (err) {
      alert(err.message);
    }
  }

  function handleClick({ currentTarget }) {
    const { id } = currentTarget;

    setInputValue({
      ...inputValue,
      ['episodeId']: id,
    });
  }

  function handleChange({ target }) {
    const { name, value } = target;

    setInputValue({
      ...inputValue,
      [name]: value,
    });
  }

  return (
    <Container>
      <div className="header">
        <span className="title">채널개설 하기</span>
        <button type="button" onClick={closeModal}>
          나가기
        </button>
      </div>
      <CreatingForm>
        <ChannelName>
          <span className="channel-name">방 이름을 입력하세요</span>
          <input
            type="text"
            name="name"
            placeholder="아무나 들어와보시지"
            value={inputValue.name}
            onChange={handleChange}
          />
        </ChannelName>
        <EpisodeOptions>
          <span className="episode-select">연기할 작품을 선택하세요</span>
          <ul className="episode-list">
            {episodes.map((episode) => (
              <EpisodeOption
                key={episode._id}
                id={episode._id}
                onClick={handleClick}
              >
                <span className="episode-title">{episode.title}</span>
                <Image
                  src={episode.thumbnail}
                  alt="episode-thumbnail"
                  width={200}
                  height={100}
                />
              </EpisodeOption>
            ))}
          </ul>
        </EpisodeOptions>
        <div className="button">
          <Button type="submit" onClick={submitData}>
            채널 개설
          </Button>
        </div>
      </CreatingForm>
    </Container>
  );
}

CreateChannel.propTypes = {
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
