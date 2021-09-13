import React, { useEffect, useRef, useState } from 'react';
import styled from '@emotion/styled';

import Peer from 'simple-peer';
import { socketClient, useSocket } from '../../hooks/socket/useSocket';
import { EVENTS } from '../../constants/socketEvent';
import * as controlStream from '../../utils/controlStream';
import Audio from './Audio';

export default function Video() {
  const [peers, setPeers] = useState({});
  const [players, setPlayers] = useState([]);
  const socket = useSocket(EVENTS.LISTEN_ENTER_CHANNEL, (player) => {
    setPlayers((prevPlayers) => [...prevPlayers, player]);
  });
  const peersRef = useRef({});
  const myAudio = useRef();
  const [isStreaming, setIsStreaming] = useState(false);

  useEffect(async () => {
    socket.emit('users');
    const stream = await controlStream.init();
    myAudio.current.srcObject = stream;
    setIsStreaming(true);

    return () => {
      stream.getVideoTracks().forEach((track) => {
        track.stop();
        stream.removeTrack(track);
      });
    };
  }, []);

  useEffect(() => {
    const { _id } = JSON.parse(sessionStorage.getItem('user'));
    for (const player of players) {
      if (player._id === _id) continue;
      const peer = new Peer({
        initiator: true,
        trickle: false,
        stream: controlStream.get(),
      });

      peer.on('signal', (signal) => {
        socketClient.emit('send signal', { signal, receiver: player });
      });

      peersRef.current[player.socketId] = peer;
      setPeers((prev) => ({ ...prev, [player.socketId]: peer }));
    }

    socket.on(
      'listen send signal',
      ({ initiatorInfo: initiator, signal, initiatorId }) => {
        const peer = new Peer({
          initiator: false,
          trickle: false,
          stream: controlStream.get(),
        });
        peer.signal(signal);

        peer.on('signal', (signal) => {
          socket.emit('return signal', {
            signal,
            receiver: initiator,
            receiverId: initiatorId,
          });
        });

        peersRef.current[initiatorId] = peer;
        setPeers((prev) => ({ ...prev, [initiatorId]: peer }));
      },
    );

    socket.on('listen return signal', ({ signal, returnerId }) => {
      const peer = peersRef.current[returnerId];

      peer.signal(signal);
    });
  }, [isStreaming, players]);

  return (
    <Wrapper>
      <audio controls autoPlay ref={myAudio} />
      {players.map((player) => (
        <Audio key={player._id} peer={peers[player.socketId]} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 55%;
  background-image: url('/images/background.jpg');
`;
