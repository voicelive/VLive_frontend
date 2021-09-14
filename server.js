const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

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
    socket.join(channelId);

    if (users[channelId]) {
      users[channelId].push(socket.id);
    } else {
      users[channelId] = [socket.id];
    }
    socketToChannel[socket.id] = channelId;

    const usersInThisChannel = users[channelId].filter(
      (id) => id !== socket.id,
    );

    socket.emit('all users', usersInThisChannel);
    socket.broadcast.emit(EVENTS.LISTEN_ENTER_CHANNEL, userData);

    io.to(userData.channelId).emit(
      'listen enter channel player list',
      userData,
    );
  });

  socket.on(EVENTS.EXIT_CHANNEL, ({ channelId, userId, userType }) => {
    socket.leave(channelId);

    io.to(channelId).emit(EVENTS.LISTEN_EXIT_CHANNEL, {
      channelId,
      userId,
      userType,
    });

    socket.broadcast.emit('listen exit channel list', {
      channelId,
      userId,
      userType,
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

  socket.on(EVENTS.END_CHANNEL, (channelId) => {
    socket.broadcast.emit(EVENTS.LISTEN_END_CHANNEL, channelId);
    socket.leave(channelId);
  });

  socket.on('disconnect', () => {
    console.log('socket disconnected...');
  });

  socket.on(
    EVENTS.PLAYER_READY,
    ({ channelId, userId, userRole, episodeInfo }) => {
      socket.join(channelId);
      io.to(channelId).emit(EVENTS.LISTEN_PLAYER_READY, { userId, userRole });

      if (!readyPlayers[channelId]) {
        readyPlayers[channelId] = [userRole];
      } else {
        readyPlayers[channelId].push(userRole);
      }

      if (readyPlayers[channelId].length === episodeInfo.characters.length) {
        io.to(channelId).emit('LISTEN_PLAYER_READY', 'start');
        readyPlayers[channelId] = [];
      }
    },
  );

  socket.on('start game', (id) => {
    socket.broadcast.emit('start game list', id);
  });

  socket.on('disconnect', () => {
    const channelId = socketToChannel[socket.id];
    let channel = users[channelId];

    if (channel) {
      channel = channel.filter((id) => id !== socket.id);
      users[channelId] = channel;
    }
  });
});

nextApp.prepare().then(() => {
  app.get('*', (req, res) => {
    return nextHandler(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
