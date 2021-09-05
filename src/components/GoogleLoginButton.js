import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';

export default function GoogleLoginButton({ setUser }) {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  async function signInGoogle() {
    const { user } = await firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
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
      setUser({...data.user, token: data.token});
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <button onClick={signInGoogle}>구글로 로그인</button>
  );
}
