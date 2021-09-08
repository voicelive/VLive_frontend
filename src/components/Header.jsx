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
  height: 100px;
  text-align: left;
  h1 {
    margin-left: 50px;
    color: ${theme.pink};
    float: left;
    font-size: 2.4em;
  }
`;

Header.propTypes = {
  children: PropTypes.string.isRequired,
};
