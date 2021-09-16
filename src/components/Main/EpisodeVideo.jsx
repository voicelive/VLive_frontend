import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import Button from '../Button';

export default function EpisodeVideo({ closeModal, episode }) {
  return (
    <Container>
      <div className="header">
        <span className="title">{episode.title}</span>
        <Button onClick={() => closeModal()}>나가기</Button>
      </div>
      <video autoPlay>
        <source src={episode.videoUrl} />
      </video>
    </Container>
  );
}

EpisodeVideo.propTypes = {
  closeModal: PropTypes.func.isRequired,
  episode: PropTypes.object,
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  border: 1px solid white;
  background-color: ${({ theme }) => theme.navy};
  color: white;

  video {
    width: 90%;
    height: 80%;
  }

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
