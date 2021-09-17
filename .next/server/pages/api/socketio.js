"use strict";
(() => {
var exports = {};
exports.id = 230;
exports.ids = [230];
exports.modules = {

/***/ 6601:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "config": () => (/* binding */ config),
  "default": () => (/* binding */ socketio)
});

;// CONCATENATED MODULE: external "socket.io"
const external_socket_io_namespaceObject = require("socket.io");
;// CONCATENATED MODULE: ./pages/api/socketio.js


const {
  EVENTS
} = __webpack_require__(7144);

const ioHandler = (req, res) => {
  if (!res.socket.server.io) {
    console.log('*First use, starting socket.io');
    const io = new external_socket_io_namespaceObject.Server(res.socket.server);
    const users = {};
    const socketToChannel = {};
    const readyPlayers = {};
    io.on('connection', socket => {
      console.log('socket connected...');
      socket.on(EVENTS.CREATE_CHANNEL, channel => {
        socket.broadcast.emit(EVENTS.LISTEN_CREATE_CHANNEL, channel);
      });
      socket.on(EVENTS.ENTER_CHANNEL, userData => {
        const {
          channelId
        } = userData;

        if (users[channelId]) {
          users[channelId].push(socket.id);
        } else {
          users[channelId] = [socket.id];
        }

        socketToChannel[socket.id] = channelId;
        const usersInThisChannel = users[channelId].filter(id => id !== socket.id);
        socket.emit(EVENTS.ALL_USER, usersInThisChannel);
        socket.join(channelId);
        io.to(channelId).emit(EVENTS.LISTEN_ENTER_CHANNEL, userData);
      });
      socket.on(EVENTS.EXIT_CHANNEL, ({
        channelId,
        userId
      }) => {
        socket.leave(channelId);
        const newUserInThisChannel = users[channelId].filter(id => id !== userId);
        users.channelId = newUserInThisChannel;
        socket.broadcast.emit(EVENTS.LISTEN_EXIT_CHANNEL, {
          channelId,
          userId
        });
      });
      socket.on(EVENTS.SENDING_SIGNAL, ({
        userToSignal,
        callerId,
        signal
      }) => {
        io.to(userToSignal).emit(EVENTS.USER_JOINED, {
          signal: signal,
          callerId: callerId
        });
      });
      socket.on(EVENTS.RETURNING_SIGNAL, ({
        callerId,
        signal
      }) => {
        io.to(callerId).emit(EVENTS.RECEIVING_RETURNED_SIGNAL, {
          signal: signal,
          id: socket.id
        });
      });
      socket.on(EVENTS.NEW_CHAT, ({
        channelId,
        newChat
      }) => {
        socket.join(channelId);
        io.to(channelId).emit(EVENTS.LISTEN_NEW_CHAT, {
          channelId,
          newChat
        });
      });
      socket.on(EVENTS.END_CHANNEL, id => {
        socket.broadcast.emit(EVENTS.LISTEN_END_CHANNEL, id);
      });
      socket.on(EVENTS.PLAYER_READY, ({
        channelId,
        userId,
        userRole,
        episodeInfo
      }) => {
        io.to(channelId).emit(EVENTS.LISTEN_PLAYER_READY, {
          userId,
          userRole
        });

        if (!readyPlayers[channelId]) {
          readyPlayers[channelId] = [userRole];
        } else {
          readyPlayers[channelId].push(userRole);
        }

        if (readyPlayers[channelId].length === episodeInfo.characters.length) {
          io.to(channelId).emit(EVENTS.LISTEN_GAME_START, 'start');
          readyPlayers[channelId] = [];
        }
      });
      socket.on(EVENTS.READY_TO_START, channelId => {
        io.to(channelId).emit(EVENTS.LISTEN_READY_TO_START, channelId);
      });
    });
    res.socket.server.io = io;
  } else {
    console.log('socket.io already running');
  }

  res.end();
};

const config = {
  api: {
    bodyParser: false
  }
};
/* harmony default export */ const socketio = (ioHandler);

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [144], () => (__webpack_exec__(6601)));
module.exports = __webpack_exports__;

})();