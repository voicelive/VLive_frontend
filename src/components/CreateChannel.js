import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

export default function CreateChannel({ closeModal }) {
  const baseurl = process.env.NEXT_PUBLIC_API_URL;
  const [episodes, setEpisodes] = useState([]);
  const [inputValue, setInputValue] = useState({
    name: '',
    episodeId: '',
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${baseurl}/episode`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const fetched = await response.json();
        setEpisodes(fetched.data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchData();
  }, []);

  async function submitData() {
    const { name, episodeId } = inputValue;
    const userId = '6134fe8265a8f8e45b246e4c'; // 세션스토리에서 받아와야 함

    try {
      const response = await fetch(`${baseurl}/channel`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, episodeId, userId }),
      });

      const posted = await response.json();

      if (posted.result === 'error') {
        alert(posted.message);
      }
    } catch (err) {
      console.error(err);
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
        <button type="button" alt="close" onClick={closeModal}>
          X
        </button>
      </div>
      <CreatingForm>
        <ChannelName>
          <span className="channel-name">방 이름을 입력하세요</span>
          <input
            type="text"
            name="name"
            value={inputValue.name}
            placeholder="아무나 들어오세요"
            onChange={handleChange}
          />
        </ChannelName>
        <EpisodeOptions>
          <span className="episode-select">연기할 작품을 선택하세요</span>
          <ul className="episode-list">
            {episodes.length &&
              episodes.map((episode) => (
                <EpisodeOption
                  key={episode._id}
                  id={episode._id}
                  onClick={handleClick}
                >
                  <span>{episode.title}</span>
                  <img src={episode.thumbnail} alt="episode-thumbnail" />
                </EpisodeOption>
              ))}
          </ul>
        </EpisodeOptions>
        <button type="submit" onClick={submitData}>
          채널 개설
        </button>
      </CreatingForm>
    </Container>
  );
}

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
  box-sizing: border-box;
  height: 90%;
  padding: 30px 50px;
  text-align: left;

  .channel-name {
    display: block;
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
    grid-template-columns: repeat(2, minmax(100px, 170px));
    padding: 0;
  }
`;

const EpisodeOption = styled.li`
  display: flex;
  flex-direction: column;
  margin-right: 10px;
  list-style: none;
  cursor: pointer;
  border: 1px solid white;
`;
