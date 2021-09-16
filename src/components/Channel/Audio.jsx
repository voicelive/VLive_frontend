import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Audio({ peer }) {
  const ref = useRef();
  useEffect(() => {
    if (!peer) {
      return;
    }
    peer.on('stream', (stream) => {
      ref.current.srcObject = stream;
    });
  }, [peer]);

  return <audio ref={ref} controls autoPlay />;
}

Audio.propTypes = {
  peer: PropTypes.object,
};
