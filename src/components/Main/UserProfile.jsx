import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import styled from '@emotion/styled';
import Image from 'next/image';

import Button from '../Button';
import GoogleLoginButton from './GoogleLoginButton';
import ErrorBox from '../ErrorBox';

export default function UserProfile() {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  if (error) {
    return <ErrorBox message={error.message} />;
  }

  useEffect(() => {
    if (!isLogin) return;

    setUser(JSON.parse(sessionStorage.getItem('user')));
  }, [isLogin]);

  async function signOutGoogle() {
    try {
      await firebase.auth().signOut();
    } catch (err) {
      setError(err.message);
    }

    window.sessionStorage.removeItem('user');
    setUser(null);
  }

  return (
    <ProfileBox>
      {user === null ? (
        <GoogleLoginButton onLogin={() => setIsLogin(true)} />
      ) : (
        <Profile>
          <div className="user-image">
            <Image
              src={user.photoUrl}
              alt="User profile image"
              width={72}
              height={72}
            />
          </div>
          <div className="user-email">{user?.email}</div>
          <div className="user-name">{user?.name}</div>
          <div className="logout">
            <Button
              onClick={signOutGoogle}
              width="230px"
              height="8px"
              borderRadius="15px"
            >
              로그아웃
            </Button>
          </div>
        </Profile>
      )}
    </ProfileBox>
  );
}

const ProfileBox = styled.div`
  padding: 20px;
  text-align: center;
  height: 120px;
  margin: 10px;
`;

const Profile = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);

  .user-image {
    grid-area: 1 / 1 / 3 / 2;
    justify-self: center;
  }

  .user-email {
    grid-area: 1 / 2 / 2 / 4;
    justify-self: start;
    color: white;
    border-bottom: 1px solid white;
    width: 160px;
    margin-bottom: 12px;
    padding: 8px 0 2px;
  }

  .user-name {
    justify-self: start;
    grid-area: 2 / 2 / 3 / 4;
    color: white;
    border-bottom: 1px solid white;
    width: 160px;
    padding: 8px 0 2px;
    margin-bottom: 12px;
  }

  .logout {
    justify-self: center;
    grid-area: 3 / 1 / 4 / 4;
  }
`;
