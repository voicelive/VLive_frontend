import React from 'react';
import theme from '../styles/theme';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

export default function Header({ children }) {
  return (
    <Wrapper>
      <h1>{childeren}</h1>
    </Wrapper>
  );
}

const Wrapper = styled.header`
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
