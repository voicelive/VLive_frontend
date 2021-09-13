import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

function Video({ peer }) {
  const ref = useRef();

  useEffect(() => {
    if (!peer) return;

    peer.on('stream', (stream) => {
      ref.current.srcObject = stream;
    });
  }, [peer]);

  return <audio ref={ref} controls autoPlay />;
}

export default Video;

Video.propTypes = {
  peer: PropTypes.object,
};
