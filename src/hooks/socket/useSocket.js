import { useEffect } from 'react';
import io from 'socket.io-client';

let socket = null;
let isConnecting = false;

export const getMySocketId = () => socket?.id;

export function useSocket(eventName, cb) {
  useEffect(() => {
    if (isConnecting) return;

    isConnecting = true;

    console.log('before fetch', socket);

    fetch('/api/socketio').finally(() => {
      socket = io();

      console.log('finally fetch', socket);

      socket.on(eventName, cb);
    });

    return function useSocketCleanup() {
      socket?.off(eventName, cb);
    };
  }, [eventName, cb]);

  return socket;
}

export const getSocketClient = () => socket;
