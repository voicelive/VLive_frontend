import 'webrtc-adapter';
import React, { useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import Peer from 'simple-peer';
import {
  socketClient,
  getMySocketId,
  useSocket,
} from '../../hooks/socket/useSocket';
import { EVENTS } from '../../constants/socketEvent';
import PlayerVideo from './PlayerVideo';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

export default function Video({ onVideoEnd }) {
  const {
    query: { channelId },
  } = useRouter();
  const [peers, setPeers] = useState([]);
  const peersRef = useRef([]);
  const userVideo = useRef();
  const episodeVideo = useRef();

  useSocket(EVENTS.LISTEN_READY_TO_START, (id) => {
    if (channelId === id) {
      episodeVideo.current.play();
    }
  });

  useSocket(EVENTS.RECEIVING_RETURNED_SIGNAL, ({ id, signal }) => {
    const item = peersRef.current.find((p) => p.peerID === id);

    item.peer.signal(signal);
  });

  useEffect(() => {
    (async () => {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      userVideo.current.srcObject = stream;

      const { _id, name, email, photoUrl } = JSON.parse(
        sessionStorage.getItem('user'),
      );

      const user = {
        _id,
        name,
        email,
        photoUrl,
        channelId,
      };

      socketClient.emit(EVENTS.ENTER_CHANNEL, user);
      socketClient.on(EVENTS.ALL_USER, (userIdList) => {
        const peers = [];

        userIdList.forEach((userId) => {
          const peer = createPeer(userId, getMySocketId(), stream);

          peersRef.current.push({
            peerID: userId,
            peer,
          });

          peers.push(peer);
        });

        setPeers(peers);
      });

      socketClient.on(EVENTS.USER_JOINED, ({ signal, callerId }) => {
        const peer = addPeer(signal, callerId, stream);

        peersRef.current.push({
          peerID: callerId,
          peer,
        });

        setPeers((users) => [...users, peer]);
      });
    })();
    return () => {
      socketClient.removeAllListeners(EVENTS.ALL_USER);
      socketClient.removeAllListeners(EVENTS.USER_JOINED);
      socketClient.removeAllListeners(EVENTS.RECEIVING_RETURNED_SIGNAL);
      socketClient.emit(EVENTS.END_CHANNEL, channelId);

      peersRef.current = [];
      setPeers((peers) => {
        peers.forEach((peer) => {
          peer.destroy();
        });

        return [];
      });
    };
  }, []);

  function createPeer(userToSignal, callerId, stream) {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream,
    });

    peer.on('signal', async (signal) => {
      socketClient().emit(EVENTS.SENDING_SIGNAL, {
        userToSignal,
        callerId,
        signal,
      });
    });

    return peer;
  }

  function addPeer(signal, callerId, stream) {
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream,
    });

    peer.on('signal', (signal) => {
      socketClient().emit(EVENTS.RETURNING_SIGNAL, { signal, callerId });
    });
    peer.signal(signal);

    return peer;
  }

  return (
    <Wrapper>
      <StyledVideo
        ref={episodeVideo}
        playsInline
        src="https://awwdwd.s3.ap-northeast-2.amazonaws.com/sampleVideo.mp4"
        onEnded={() => onVideoEnd()}
        muted
      />
      <PlayerVideoContainer>
        <video
          playsInline
          autoPlay
          ref={userVideo}
          width="150px"
          height="150px"
          muted
        />
        {peers.map((peer, index) => (
          <PlayerVideo key={index} peer={peer} />
        ))}
      </PlayerVideoContainer>
    </Wrapper>
  );
}

Video.propTypes = {
  onVideoEnd: PropTypes.func.isRequired,
};

const StyledVideo = styled.video`
  width: 810px;
  height: 455px;
  margin-top: -10px;
`;

const PlayerVideoContainer = styled.div`
  width: 150px;
  height: 450px;
  float: right;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 55%;
`;
