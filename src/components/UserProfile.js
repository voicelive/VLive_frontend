import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import styled from '@emotion/styled';
import GoogleLoginButton from './GoogleLoginButton';

function UserProfile() {
  const [userInfo, setUserInfo] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (!userInfo) return;

    const sessionStorage = window.sessionStorage;

    sessionStorage.setItem('userInfo', userInfo);
    setIsLogin(true);
  }, [userInfo]);

  async function signOutGoogle() {
    await firebase.auth().signOut();
    storage.removeItem('userInfo');
  }

  return (
    <>
      {!isLogin && <GoogleLoginButton setUserInfo={setUserInfo} />}
      <Profile>
        <div class='user-image'>
          <img src={userInfo.photoUrl}/>
        </div>
        <div class='user-email'>{userInfo.email}</div>
        <div class='user-name'>{userInfo.name}</div>
        <div class='logout'>
          <button onClick={signOutGoogle}>
            로그아웃
          </button>
        </div>
      </Profile>
    </>
  );
}

const Profile = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 5px;
  grid-row-gap: 5px;

  .user-image { grid-area: 1 / 1 / 3 / 2; }
  .user-email { grid-area: 1 / 2 / 2 / 4; }
  .user-name { grid-area: 2 / 2 / 3 / 4; }
  .logout { grid-area: 3 / 1 / 4 / 4; }
`;

export default UserProfile;
