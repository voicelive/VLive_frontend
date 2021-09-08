import React from 'react';
import styled from '@emotion/styled';
import theme from '../styles/theme';
import PropTypes from 'prop-types';

export default function Header({ children }) {
  return (
    <Container>
      <h1>{children}</h1>
    </Container>
  );
}

const Container = styled.header`
  width: 100%;
  height: 10vh;
  text-align: left;
  background: ${theme.navy};
  box-shadow: inset 0px -19px 12px -6px #383650a5;
  h1 {
    margin: 20px 0 0 50px;
    color: ${theme.pink};
    float: left;
    font-size: 2.4em;
  }
`;

Header.propTypes = {
  children: PropTypes.string.isRequired,
};
