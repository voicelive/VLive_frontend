import React from 'react';
import styled from '@emotion/styled';
import Image from 'next/image';
import useSWR from 'swr';

async function fetcher() {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  try {
    const response = await fetch(`${baseUrl}/episode`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const { data } = await response.json();

    return data;
  } catch (err) {
    console.error(err);
  }
}

export default function Preview() {
  const { data: episodes } = useSWR('/episode', fetcher);

  return (
    <PreviewContainer>
      {episodes?.map((episode) => {
        return (
          <div key={episode._id} className="episode">
            {episode !== null && (
              <Image
                src="https://source.unsplash.com/random"
                alt="Episode thumbnail"
                width={100}
                height={100}
              />
            )}
            {episode.thumbnail}
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
