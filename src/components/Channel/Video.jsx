import 'webrtc-adapter';
import React, { useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import Peer from 'simple-peer';
import { socketClient, getMySocketId } from '../../hooks/socket/useSocket';
import { EVENTS } from '../../constants/socketEvent';
import Audio from './Audio';

export default function Video() {
  function createPeer(userToSignal, callerId, stream) {
    const peer = new Peer({
      initiator: true,
      trickle: false,
      stream,
    });

    peer.on('signal', async (signal) => {
      socketClient.emit(EVENTS.SENDING_SIGNAL, {
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
      socketClient.emit(EVENTS.RETURNING_SIGNAL, { signal, callerId });
    });
    peer.signal(signal);

    return peer;
  }

  const [peers, setPeers] = useState([]);
  const peersRef = useRef([]);
  const userVideo = useRef();

  useEffect(async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });

    userVideo.current.srcObject = stream;
    userVideo.current.play();

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

    socketClient.on(EVENTS.RECEIVING_RETURNED_SIGNAL, ({ id, signal }) => {
      const item = peersRef.current.find((p) => p.peerID === id);
      item.peer.signal(signal);
    });

    return () => {
      socketClient.removeAllListeners(EVENTS.ALL_USER);
      socketClient.removeAllListeners(EVENTS.USER_JOINED);
      socketClient.removeAllListeners(EVENTS.RECEIVING_RETURNED_SIGNAL);
    };
  }, []);

  return (
    <Wrapper>
      {peers.map((peer, index) => (
        <Audio key={index} peer={peer} />
      ))}
      <video playsInline ref={userVideo} controls />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 55%;
  background-image: url('/images/background.jpg');
`;
