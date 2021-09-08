import React from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import useEpisodes from '../../hooks/useEpisodes';
import ErrorBox from '../ErrorBox';

export default function Preview() {
  const { episodes, error } = useEpisodes();

  if (error) {
    return <ErrorBox message={error.message} />;
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
