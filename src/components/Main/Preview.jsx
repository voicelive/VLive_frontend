import React, { useState } from 'react';
import Image from 'next/image';
import styled from '@emotion/styled';

import useEpisodes from '../../hooks/channel/useEpisodes';

import EpisodeVideo from './EpisodeVideo';
import Modal from '../Modal';
import ErrorBox from '../ErrorBox';

export default function Preview() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [episode, setEpisode] = useState(null);
  const { episodes, error } = useEpisodes();

  if (error) {
    return <ErrorBox message={error.message} />;
  }

  function openModal(episode) {
    setEpisode(episode);
    setIsModalOpen(true);
  }

  function closeModal() {
    setIsModalOpen(false);
  }

  return (
    <PreviewContainer>
      <h2 className="preview-title">Episode preview</h2>
      <ListContainer>
        {episodes?.map((episode) => {
          return (
            <div key={episode._id} onClick={() => openModal(episode)}>
              <h3 className="episode-title">{episode.title}</h3>
              <div className="episode-thumbnail">
                <Image
                  src={episode.thumbnail}
                  alt="Episode thumbnail"
                  width={100}
                  height={100}
                />
              </div>
            </div>
          );
        })}
      </ListContainer>
      {isModalOpen && (
        <Modal closeModal={closeModal}>
          <EpisodeVideo
            closeModal={closeModal}
            episode={episode}
          ></EpisodeVideo>
        </Modal>
      )}
    </PreviewContainer>
  );
}

const PreviewContainer = styled.div`
  text-align: center;
  margin: 30px 20px 20px;

  .preview-title {
    margin: 2px;
    color: white;
    font-weight: 500;
  }

  .episode:hover {
    border: 1px solid black;
  }
`;

const ListContainer = styled.div`
  position: relative;
  padding: 10px;
  height: 500px;
  overflow: scroll;
  border-radius: 10px;
  box-shadow: inset 0px 0px 15px 8px rgba(0, 0, 0, 0.383);
  background: #2e313db3;
  .episode-title {
    color: white;
    font-weight: 300;
  }
  .episode-thumbnail {
    margin: 0 auto;
  }
`;
