import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import GoogleLoginButton from './GoogleLoginButton';
import ErrorBox from '../ErrorBox';
import LogoutButton from './LogoutButton';

export default function UserProfile({ loginStatus, setLoginStatus }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  if (error) {
    return <ErrorBox message={error.message} />;
  }

  useEffect(() => {
    setUser(JSON.parse(sessionStorage.getItem('user')));
  }, [loginStatus]);

  return (
    <ProfileBox>
      {user === null ? (
        <GoogleLoginButton onLogin={() => setLoginStatus(true)} />
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
            <LogoutButton
              setLogoutError={setError}
              onLogout={() => setLoginStatus(false)}
            />
          </div>
        </Profile>
      )}
    </ProfileBox>
  );
}

UserProfile.propTypes = {
  loginStatus: PropTypes.boolean,
  setLoginStatus: PropTypes.func.isRequired,
};

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
