import React from 'react';
import Link from 'next/link';
import Button from '../components/Button';
import PropTypes from 'prop-types';

export default function ErrorBox({ error }) {
  return (
    <>
      <h2>{error}</h2>
      <Link href="/" passHref>
        <Button color="red">홈으로 돌아가기</Button>
      </Link>
    </>
  );
}

ErrorBox.propTypes = {
  error: PropTypes.func.isRequired,
};
