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
      <List>
        {episodes?.map((episode) => {
          return (
            <div
              className="episode"
              key={episode._id}
              onClick={() => openModal(episode)}
            >
              <h3 className="episode-title">{episode.title}</h3>
              <div className="episode-thumbnail">
                <Image
                  src={episode.thumbnail}
                  alt="Episode thumbnail"
                  width={230}
                  height={120}
                />
              </div>
            </div>
          );
        })}
      </List>
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
  height: 50%;
  padding: 20px 0;
  box-sizing: border-box;

  .preview-title {
    margin: 2px;
    color: white;
    font-weight: 500;
  }

  .episode:hover {
    border: 1px solid black;
    font-size: 1.2em;
  }
`;

const List = styled.div`
  .episode-title {
    margin: 10px 0;
    font-weight: 300;
    font-size: 1em;
    color: white;
  }

  .episode-thumbnail {
    margin: 20px auto;
  }
`;
