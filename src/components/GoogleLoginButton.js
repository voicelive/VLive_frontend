import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import PropTypes from 'prop-types';
import Button from '../components/Button';

export default function GoogleLoginButton({ setIsLogin }) {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

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
      const { data } = await response.json();

      window.sessionStorage.setItem(
        'user',
        JSON.stringify({
          ...data.user,
          token: data.token,
        }),
      );
      setIsLogin(true);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <Button onClick={signInGoogle} color="black">
      구글로 로그인
    </Button>
  );
}

GoogleLoginButton.propTypes = {
  setIsLogin: PropTypes.func.isRequired,
};
