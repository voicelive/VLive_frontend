import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

export default function Header({ children }) {
  return (
    <HeaderWrapper>
      <h1 className="app-name">{children}</h1>
    </HeaderWrapper>
  );
}

Header.propTypes = {
  children: PropTypes.string.isRequired,
};

const HeaderWrapper = styled.header`
  width: 100%;
  height: 8vh;
  text-align: left;
  background-color: ${({ theme }) => theme.darkNavy};
  box-shadow: ${({ theme }) => theme.whiteShadow};

  .app-name {
    margin: 0;
    padding: 18px 40px;
    height: 100%;
    line-height: 4vh;
    font-size: 40px;
    color: ${({ theme }) => theme.blue};
  }
`;
