import React from 'react';
import styled from '@emotion/styled';
import theme from '../styles/theme';

export default function Header() {
  return (
    <Container>
      <h1>V-Live</h1>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  height: 100px;
  text-align: left;
  h1 {
    margin-left: 50px;
    color: ${theme.pink};
    float: left;
    font-size: 2.4em;
  }
`;
