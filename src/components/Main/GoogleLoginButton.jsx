import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import PropTypes from 'prop-types';
import theme from '../../styles/theme';

import Button from '../Button';
import ErrorBox from '../ErrorBox';
import { API } from '../../constants/api';

export default function GoogleLoginButton({ onLogin }) {
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
      const response = await fetch(`${API.URL}/login`, {
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
    <Button
      onClick={signInGoogle}
      bgColor={theme.blue}
      width="75%"
      fontSize="1.2em"
    >
      Google
    </Button>
  );
}

GoogleLoginButton.propTypes = {
  onLogin: PropTypes.func.isRequired,
};
