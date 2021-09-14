import React from 'react';
import styled from '@emotion/styled';

export default async function Video() {
  return (
    <Wrapper>
      <video playsInline />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 55%;
  background-image: url('/images/background.jpg');
`;
