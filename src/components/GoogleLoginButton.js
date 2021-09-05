import React from 'react';

export default function GoogleLoginButton({ setUserInfo }) {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;

  async function signInGoogle() {
    const { user } = await firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider());
    const userInfo = {
      email: user.email,
      name: user.displayName,
      photoUrl: user.photoURL,
    };

    const { data } = await fetch(`${baseUrl}/login`, {
      method: 'POST',
      body: JSON.stringify(userInfo),
    });

    setUserInfo(...data.user, data.token);
  }

  return (
    <>
      <button onClick={signInGoogle}>구글로 로그인</button>
    </>
  );
}
