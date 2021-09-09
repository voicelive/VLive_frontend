const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

<<<<<<< HEAD
const { EVENTS } = require('./src/constants/socketEvent');
=======
const chatContents = {};
>>>>>>> 4510e87 (feat: connect chat socket)

io.on('connection', (socket) => {
  console.log('socket connected...');

  socket.on(EVENTS.CREATE_CHANNEL, (channel) => {
    socket.broadcast.emit(EVENTS.LISTEN_CREATE_CHANNEL, channel);
  });

  socket.on(EVENTS.ENTER_CHANNEL, (userData) => {
    socket.join(userData.channelId);

    socket.broadcast.emit(EVENTS.LISTEN_ENTER_CHANNEL, userData);
  });

  socket.on();
  socket.on('new chat', ({ channelId, newChat }) => {
    // socket.join(channelId);
    if (!channelId) {
      return;
    }

    if (newChat === '') {
      return;
    }

    chatContents.hasOwnProperty(channelId)
      ? chatContents[channelId].push(newChat)
      : (chatContents[channelId] = [newChat]);

    console.log(chatContents);
    console.log('chatBody에게 보내기 직전!');

    const updatedContents = chatContents[channelId];
    socket.broadcast.emit('listen new chat', updatedContents);
    // io.to(channelId).emit('listen new chat', updatedContents);
    console.log('보내고나서');
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
