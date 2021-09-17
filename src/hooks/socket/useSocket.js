import { useEffect } from 'react';
import io from 'socket.io-client';

let socket = null;

export const getMySocketId = () => socket?.id;

export function useSocket(eventName, cb) {
  useEffect(() => {
    console.log('before fetch', socket);

    if (socket) return;

    fetch('/api/socketio').finally(() => {
      console.log('finally fetch', socket);

      // TODO: Update address
      socket = io(process.env.SOCKET_SERVER_ADDRESS);

      socket.on(eventName, cb);
    });

    return function useSocketCleanup() {
      socket?.off(eventName, cb);
    };
  }, [eventName, cb]);

  return socket;
}

export const getSocketClient = () => socket;
