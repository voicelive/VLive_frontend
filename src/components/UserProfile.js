import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import Image from 'next/image';

import Button from '../components/Button';
import GoogleLoginButton from './GoogleLoginButton';

export default function UserProfile({ setError }) {
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState(null);

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
        <GoogleLoginButton setError={setError} setIsLogin={setIsLogin} />
      ) : (
        <Profile>
          <div className="user-image">
            <Image
              src={user.photoUrl}
              alt="User profile image"
              width={70}
              height={70}
            />
          </div>
          <div className="user-email">{user?.email}</div>
          <div className="user-name">{user?.name}</div>
          <div className="logout">
            <Button onClick={signOutGoogle} color="black">
              로그아웃
            </Button>
          </div>
        </Profile>
      )}
    </ProfileBox>
  );
}

const Profile = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);

  .user-image {
    grid-area: 1 / 1 / 3 / 2;
    justify-self: start;
  }

  .user-email {
    grid-area: 1 / 2 / 2 / 4;
    justify-self: start;
  }

  .user-name {
    justify-self: start;
    grid-area: 2 / 2 / 3 / 4;
  }

  .logout {
    justify-self: center;
    grid-area: 3 / 1 / 4 / 4;
  }
`;

const ProfileBox = styled.div`
  height: 120px;
  padding: 20px;
  text-align: center;
`;

UserProfile.propTypes = {
  setError: PropTypes.func.isRequired,
};
