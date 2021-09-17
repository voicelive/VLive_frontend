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

<<<<<<< HEAD
import ErrorBox from '../ErrorBox';
import ChatBody from './ChatBody';
import ChatForm from './ChatForm';
=======
>>>>>>> b0bdcbf (style: change channel index composition)
import Vote from './Vote';
import VoteResult from './VoteResult';

import useChannel from '../../hooks/channel/useChannel';

export default function ChannelMain() {
  const {
    query: { channelId },
  } = useRouter();
  const [peers, setPeers] = useState([]);
  const peersRef = useRef([]);
  const userVideo = useRef();
  const episodeVideo = useRef();

  const [showResult, setShowResult] = useState(false);
  const [showVote, setShowVote] = useState(false);
  const [showVideo, setShowVideo] = useState(true);

  useSocket(EVENTS.LISTEN_READY_TO_START, (id) => {
    if (channelId === id) {
      episodeVideo.current.play();
    }
  });

  useEffect(async () => {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: true,
    });
    userVideo.current.srcObject = stream;
    userVideo.current.play();

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
    socketClient.once(EVENTS.ALL_USER, (userIdList) => {
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
      if (!stream) return;

      stream.getVideoTracks().forEach((track) => {
        track.stop();
        stream.removeTrack(track);
      });

      delete peersRef.current;
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

<<<<<<< HEAD
  function turnToVote() {
    setShowVote(true);
  }

  function turnToResult() {
    setShowResult(true);
  }

  function turnToChat() {
    setShowVote(false);
  }

  return (
    <MainContainer>
      <header>
        <h2 className="channel-name">{name}</h2>
        <h3 className="episode-title">{episode?.title}</h3>
      </header>
      <VideoWrapper>
        {showResult ? <VoteResult /> : <Video onVideoEnd={turnToVote} />}
      </VideoWrapper>
      <ChatWrapper>
        {showVote ? (
          <Vote onVoteTimeEnd={turnToResult} onVote={turnToChat} />
        ) : (
          <>
            <ChatBody />
            <ChatForm />
          </>
        )}
      </ChatWrapper>
    </MainContainer>
  );
}
=======
    peer.on('signal', (signal) => {
      socketClient.emit(EVENTS.RETURNING_SIGNAL, { signal, callerId });
    });
    peer.signal(signal);
>>>>>>> b0bdcbf (style: change channel index composition)

    return peer;
  }

  function displayVote() {
    setShowVote(true);
    setShowVideo(false);
  }

  function displayResult() {
    setShowVote(false);
    setShowVideo(false);
    setShowResult(true);
  }

  return (
    <Container>
      {showVideo && (
        <StyledVideo
          ref={episodeVideo}
          playsInline
          src="https://awwdwd.s3.ap-northeast-2.amazonaws.com/sampleVideo.mp4"
          onEnded={displayVote}
          muted
        />
      )}
      {showVote && <Vote onShowResult={displayResult} />}
      {showResult && <VoteResult />}
      <PlayerVideoWrapper>
        <video
          playsInline
          autoPlay
          ref={userVideo}
          width="220px"
          height="150px"
          muted
        />
        {peers.map((peer, index) => (
          <PlayerVideo key={index} peer={peer} />
        ))}
      </PlayerVideoWrapper>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  height: 62vh;
  background-image: linear-gradient(
      rgba(5, 3, 19, 0.801),
      rgba(5, 3, 19, 0.87),
      rgba(2, 0, 36, 0.747),
      rgba(5, 3, 19, 0.87),
      rgba(4, 0, 27, 0.801)
    ),
    url('/images/background.jpg');
`;

const StyledVideo = styled.video`
  width: 65%;
  height: 100%;
  background-color: black;
`;

const PlayerVideoWrapper = styled.div`
  width: 35%;
  height: 100%;
`;
