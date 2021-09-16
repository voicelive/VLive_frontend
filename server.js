const { createServer } = require('https');
const { parse } = require('url');
const next = require('next');
const fs = require('fs');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const httpsOptions = {
  key: fs.readFileSync('./certificates/localhost.key'),
  cert: fs.readFileSync('./certificates/localhost.crt'),
};

app.prepare().then(() => {
  const server = createServer(httpsOptions, (req, res) => {
    const parsedUrl = parse(req.url, true);
    handle(req, res, parsedUrl);
  }).listen(3000, (err) => {
    if (err) throw err;
    console.log('> Server started on https://localhost:3000');
  });

  const io = require('socket.io')(server);

  const { EVENTS } = require('./src/constants/socketEvent');

  const users = {};
  const socketToChannel = {};
  const readyPlayers = {};

  io.on('connection', (socket) => {
    console.log('socket connected...');

    socket.on(EVENTS.CREATE_CHANNEL, (channel) => {
      socket.broadcast.emit(EVENTS.LISTEN_CREATE_CHANNEL, channel);
    });

    socket.on(EVENTS.ENTER_CHANNEL, (userData) => {
      const { channelId } = userData;

      if (users[channelId]) {
        users[channelId].push(socket.id);
      } else {
        users[channelId] = [socket.id];
      }

      socketToChannel[socket.id] = channelId;

      const usersInThisChannel = users[channelId].filter(
        (id) => id !== socket.id,
      );

      socket.emit(EVENTS.ALL_USER, usersInThisChannel);

      socket.join(channelId);

      io.to(channelId).emit(EVENTS.LISTEN_ENTER_CHANNEL, userData);
    });

    socket.on(EVENTS.EXIT_CHANNEL, ({ channelId, userId }) => {
      socket.leave(channelId);

      const newUserInThisChannel = users[channelId].filter(
        (id) => id !== userId,
      );

      users.channelId = newUserInThisChannel;

      socket.broadcast.emit(EVENTS.LISTEN_EXIT_CHANNEL, {
        channelId,
        userId,
      });
    });

    socket.on(EVENTS.SENDING_SIGNAL, ({ userToSignal, callerId, signal }) => {
      io.to(userToSignal).emit(EVENTS.USER_JOINED, {
        signal: signal,
        callerId: callerId,
      });
    });

    socket.on(EVENTS.RETURNING_SIGNAL, ({ callerId, signal }) => {
      io.to(callerId).emit(EVENTS.RECEIVING_RETURNED_SIGNAL, {
        signal: signal,
        id: socket.id,
      });
    });

    socket.on(EVENTS.NEW_CHAT, ({ channelId, newChat }) => {
      socket.join(channelId);
      io.to(channelId).emit(EVENTS.LISTEN_NEW_CHAT, { channelId, newChat });
    });

    socket.on(EVENTS.END_CHANNEL, (id) => {
      socket.broadcast.emit(EVENTS.LISTEN_END_CHANNEL, id);
    });

    socket.on(
      EVENTS.PLAYER_READY,
      ({ channelId, userId, userRole, episodeInfo }) => {
        io.to(channelId).emit(EVENTS.LISTEN_PLAYER_READY, { userId, userRole });

        if (!readyPlayers[channelId]) {
          readyPlayers[channelId] = [userRole];
        } else {
          readyPlayers[channelId].push(userRole);
        }

        if (readyPlayers[channelId].length === episodeInfo.characters.length) {
          io.to(channelId).emit(EVENTS.LISTEN_GAME_START, 'start');

          readyPlayers[channelId] = [];
        }
      },
    );

    socket.on(EVENTS.READY_TO_START, (id) => {
      socket.broadcast.emit(EVENTS.LISTEN_READY_TO_START, id);
    });
  });
});
