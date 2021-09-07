import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import PropTypes from 'prop-types';
import Button from '../Button';
import ErrorBox from '../ErrorBox';

export default function GoogleLoginButton({ onLogin }) {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  const [error, setError] = useState(null);

  if (error) {
    return <ErrorBox />;
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

      onLogin(true);
    } catch (err) {
      setError(err.message);
    }
  }

  return (
    <Button onClick={signInGoogle} color="black">
      구글로 로그인
    </Button>
  );
}

GoogleLoginButton.propTypes = {
  onLogin: PropTypes.func.isRequired,
};