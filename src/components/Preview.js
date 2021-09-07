import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import useGetEpisodes from '../hooks/useGetEpisodes';

export default function Preview() {
  const { episodes } = useGetEpisodes();

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
  border: 1px solid black;
  padding: 20px;
  text-align: center;
  overflow: scroll;
  .episode {
    background: gray;
  }
`;
