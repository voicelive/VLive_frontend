import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

export default function Header({ openModal, loginStatus }) {
  return (
    <HeaderWrapper loginStatus={loginStatus}>
      <Link href="/main" passHref>
        <span className="nav">CHANNEL</span>
      </Link>
      <Link href="/" passHref>
        <span className="nav logo">VLIVE</span>
      </Link>
      <span href="/channel" className="nav create-channel" onClick={openModal}>
        CREATE CHANNEL
      </span>
    </HeaderWrapper>
  );
}

Header.propTypes = {
  openModal: PropTypes.func.isRequired,
  loginStatus: PropTypes.bool.isRequired,
};

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10vh;
  text-align: center;
  background-color: ${({ theme }) => theme.darkNavy};
  box-shadow: ${({ theme }) => theme.blueShadow};

  .nav {
    width: 33.3vh;
    box-sizing: border-box;
    cursor: pointer;
    font-weight: 600;
    font-size: 1.1em;
    color: ${({ theme }) => theme.white};

    :hover {
      color: ${({ theme }) => theme.blue};
    }
  }

  .logo {
    font-weight: 800;
    font-size: 2em;
    color: ${({ theme }) => theme.blue};
  }

  .app-name {
    margin: 0;
    padding: 18px 40px;
    height: 100%;
    line-height: 4vh;
    font-size: 40px;
    color: ${({ theme }) => theme.blue};
  }

  .create-channel {
    cursor: ${({ loginStatus }) => (!loginStatus ? 'not-allowed' : 'pointer')};
    pointer-events: ${({ loginStatus }) => (!loginStatus ? 'none' : 'auto')};
  }
`;
