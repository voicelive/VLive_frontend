import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import Button from '../Button';
import ErrorBox from '../ErrorBox';
export default function GoogleLoginButton({ onLogin }) {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const [error, setError] = useState(null);

  if (error) {
    return <ErrorBox message={error.message} />;
  }

  async function signInGoogle() {
    const { user } = await firebase
      .auth()
      .signInWithPopup(new firebase.auth.GoogleAuthProvider());
    const userInfo = {
      email: user.email,
      name: user.displayName,
      photoUrl: user.photoURL,
    };

    try {
      const response = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userInfo),
      });
      const { result, data, message } = await response.json();

      if (result === 'error') {
        return setError(message);
      }

      window.sessionStorage.setItem(
        'user',
        JSON.stringify({
          ...data.user,
          token: data.token,
        }),
      );

      onLogin();
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <ButtonContainer>
      <Button
        onClick={signInGoogle}
        color="black"
        width="200px"
        fontSize="1.2em"
      >
        구글로 로그인
      </Button>
    </ButtonContainer>
  );
}

const ButtonContainer = styled.div`
  padding-top: 30px;
  position: relative;
`;

GoogleLoginButton.propTypes = {
  onLogin: PropTypes.func.isRequired,
};
