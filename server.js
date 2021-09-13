const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

const { EVENTS } = require('./src/constants/socketEvent');

io.on('connection', (socket) => {
  console.log('socket connected...');

  socket.on(EVENTS.CREATE_CHANNEL, (channel) => {
    socket.broadcast.emit(EVENTS.LISTEN_CREATE_CHANNEL, channel);
  });

  socket.on(EVENTS.ENTER_CHANNEL, (userData) => {
    socket.join(userData.channelId);

    socket.broadcast.emit(EVENTS.LISTEN_ENTER_CHANNEL, userData);
  });

  socket.on(EVENTS.NEW_CHAT, ({ channelId, newChat }) => {
    socket.join(channelId);
    io.to(channelId).emit(EVENTS.LISTEN_NEW_CHAT, { channelId, newChat });
  });

  socket.on(EVENTS.END_CHANNEL, (channelId) => {
    socket.broadcast.emit(EVENTS.LISTEN_END_CHANNEL, channelId);
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
