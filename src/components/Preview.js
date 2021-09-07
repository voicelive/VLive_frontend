import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import PropTypes from 'prop-types';
import useEpisodes from '../hooks/useEpisodes';

export default function Preview({ setError }) {
  const { episodes, error } = useEpisodes();

  if (error) {
    setError(error.message);
  }

  return (
    <PreviewContainer>
      {episodes?.map((episode) => {
        return (
          <div key={episode._id} className="episode">
            <Image
              src="https://source.unsplash.com/random"
              alt="Episode thumbnail"
              width={100}
              height={100}
            />
            <h3>{episode.title}</h3>
          </div>
        );
      })}
    </PreviewContainer>
  );
}

const PreviewContainer = styled.div`
  display: inline-block;
  height: 500px;
  width: 80%;
  padding: 20px;
  text-align: center;
  overflow: scroll;
  border: 1px solid black;

  .episode {
    background: gray;
  }
`;

Preview.propTypes = {
  setError: PropTypes.func.isRequired,
};
