const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({ dev });
const nextHandler = nextApp.getRequestHandler();

const { EVENTS } = require('./src/constants/socketEvent');

const chatContents = {};

io.on('connection', (socket) => {
  console.log('socket connected...');

  socket.on(EVENTS.CREATE_CHANNEL, (channel) => {
    socket.broadcast.emit(EVENTS.LISTEN_CREATE_CHANNEL, channel);
  });

  socket.on(EVENTS.ENTER_CHANNEL, (userData) => {
    socket.join(userData.channelId);

    socket.broadcast.emit(EVENTS.LISTEN_ENTER_CHANNEL, userData);
  });

  socket.on('new chat', ({ channelId, newChat }) => {
    socket.join(channelId);

    if (!chatContents[channelId]) {
      const data = {
        channelId,
        chatList: [newChat],
      };

      chatContents[channelId] = data;
    } else {
      chatContents[channelId].chatList.push(newChat);
    }

    const { chatList } = chatContents[channelId];

    io.to(channelId).emit('listen new chat', chatList);

    saveChat(channelId);
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

async function saveChat(channelId) {
  try {
    const response = await fetch(`${process.env.API_URL}/chat`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(chatContents[channelId]),
    });
    const { result, message } = await response.json();

    if (result === 'error') {
      throw new Error(message);
    }
  } catch (err) {
    alert(err.message);
  }
}
