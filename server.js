const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

const { EVENTS } = require('./src/constants/socketEvent');

let users = {};

io.on('connection', (socket) => {
  console.log('socket connected...');

  socket.on(EVENTS.CREATE_CHANNEL, (channel) => {
    users[channel._id] = [];
    socket.broadcast.emit(EVENTS.LISTEN_CREATE_CHANNEL, channel);
  });

  socket.on(EVENTS.ENTER_CHANNEL, (userData) => {
    socket.join(userData.channelId);

    if (!users[userData.channelId]) {
      users[userData.channelId] = [];
    }

    users[userData.channelId].push({
      [socket.id]: userData,
    });

    const newUser = {
      ...userData,
      socketId: socket.id,
    };

    socket.broadcast.emit(EVENTS.LISTEN_ENTER_CHANNEL, newUser);
  });

  socket.on(EVENTS.SEND_SIGNAL, ({ signal, receiver }) => {
    let initiator;
    for (const channel in users) {
      [initiator] = users[channel].filter(
        (user) => Object.keys(user)[0] === socket.id,
      );
    }

    const [initiatorId, initiatorInfo] = Object.entries(initiator)[0];

    const { socketId } = receiver;
    io.to(socketId).emit(EVENTS.LISTEN_SEND_SIGNAL, {
      initiatorId,
      initiatorInfo,
      signal,
    });
  });

  socket.on(EVENTS.RETURN_SIGNAL, ({ signal, receiverId }) => {
    let returner;

    for (const channel in users) {
      [returner] = users[channel].filter(
        (user) => Object.keys(user)[0] === socket.id,
      );
    }
    const [returnerId, returnerInfo] = Object.entries(returner)[0];

    io.to(receiverId).emit(EVENTS.LISTEN_RETURN_SIGNAL, {
      returnerId,
      returnerInfo,
      signal,
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

  socket.on(EVENTS.PLAYER_READY, ({ channelId, _id, userRole }) => {
    io.to(channelId).emit(EVENTS.LISTEN_PLAYER_READY, { _id, userRole });
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
