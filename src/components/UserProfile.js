import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import GoogleLoginButton from './GoogleLoginButton';
import firebase from 'firebase/app';
import 'firebase/auth';
import Image from 'next/image';

function UserProfile() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!user) return;

    window.sessionStorage.setItem('user', user);
  }, [user]);

  async function signOutGoogle() {
    await firebase.auth().signOut();
    window.sessionStorage.removeItem('user');
    setUser(null);
  }

  return (
    <>
      {!user && <GoogleLoginButton setUser={setUser} />}
      <Profile>
        <div className="user-image">
          <Image src={user?.photoUrl} />
        </div>
        <div className="user-email">{user?.email}</div>
        <div className="user-name">{user?.name}</div>
        <div className="logout">
          <button onClick={signOutGoogle}>로그아웃</button>
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

  .user-image {
    grid-area: 1 / 1 / 3 / 2;
  }
  .user-email {
    grid-area: 1 / 2 / 2 / 4;
  }
  .user-name {
    grid-area: 2 / 2 / 3 / 4;
  }
  .logout {
    grid-area: 3 / 1 / 4 / 4;
  }
`;

export default UserProfile;
