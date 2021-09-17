exports.id = 398;
exports.ids = [398];
exports.modules = {

/***/ 4461:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Modal)
/* harmony export */ });
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6177);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



function Modal({
  children,
  closeModal
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(Wrapper, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(Dimmed, {
      onClick: closeModal
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(StyledModal, {
      children: children
    })]
  });
}
const Wrapper = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().div)`
  width: 100%;
  height: 100%;
`;
const Dimmed = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().div)`
  z-index: 99;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.8);
`;
const StyledModal = (_emotion_styled__WEBPACK_IMPORTED_MODULE_0___default().div)`
  z-index: 999;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 600px;
  height: 450px;
  text-align: center;
  background-color: white;
  transform: translate(-50%, -50%);
  box-shadow: 0px 1px 5px 3px rgba(0, 0, 0, 0.1);
`;

/***/ }),

/***/ 7144:
/***/ ((module) => {

module.exports.EVENTS = {
  ENTER_CHANNEL: 'enter channel',
  LISTEN_ENTER_CHANNEL: 'listen enter channel',
  LISTEN_ENTER_CHANNEL_LIST: 'listen enter channel list',
  CREATE_CHANNEL: 'create channel',
  LISTEN_CREATE_CHANNEL: 'listen create channel',
  EXIT_CHANNEL: 'exit channel',
  LISTEN_EXIT_CHANNEL: 'listen exit channel',
  LISTEN_EXIT_CHANNEL_LIST: 'listen exit channel list',
  END_CHANNEL: 'end channel',
  LISTEN_END_CHANNEL: 'listen end channel',
  NEW_CHAT: 'new chat',
  LISTEN_NEW_CHAT: 'listen new chat',
  PLAYER_READY: 'player ready',
  LISTEN_PLAYER_READY: 'listen player ready',
  SEND_SIGNAL: 'send signal',
  RETURN_SIGNAL: 'return signal',
  LISTEN_SEND_SIGNAL: 'listen send signal',
  LISTEN_RETURN_SIGNAL: 'listen return signal',
  ALL_USER: 'all user',
  SENDING_SIGNAL: 'sending signal',
  RETURNING_SIGNAL: 'returning signal',
  USER_JOINED: 'user joined',
  RECEIVING_RETURNED_SIGNAL: 'receiving returned signal',
  LISTEN_GAME_START: 'listen game start',
  READY_TO_START: 'start game',
  LISTEN_READY_TO_START: 'listen start game'
};

/***/ }),

/***/ 3942:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useChannel)
/* harmony export */ });
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7749);
/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swr__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3486);



async function fetcher(channelId) {
  try {
    const response = await fetch(`${_constants_api__WEBPACK_IMPORTED_MODULE_1__/* .API.URL */ .b.URL}/channel/${channelId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const {
      data: channel
    } = await response.json();
    return channel;
  } catch (err) {
    alert(err.message);
  }
}

function useChannel(channelId) {
  const {
    data: channel,
    error,
    mutate
  } = swr__WEBPACK_IMPORTED_MODULE_0___default()(channelId ? `/channel/${channelId}` : null, () => {
    return fetcher(channelId);
  });
  return {
    channel,
    error,
    mutate
  };
}

/***/ }),

/***/ 1657:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ usePlayers)
/* harmony export */ });
/* harmony import */ var _useChannel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3942);

function usePlayers(channelId) {
  const {
    channel,
    error,
    mutate
  } = (0,_useChannel__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z)(channelId);
  const players = channel ? channel.players : [];
  return {
    players,
    error,
    mutate
  };
}

/***/ }),

/***/ 6388:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cH": () => (/* binding */ getMySocketId),
/* harmony export */   "sV": () => (/* binding */ useSocket)
/* harmony export */ });
/* unused harmony export socketClient */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7069);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_1__);


const socket = socket_io_client__WEBPACK_IMPORTED_MODULE_1___default()();
const getMySocketId = () => socket.id;
function useSocket(eventName, cb) {
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    socket.on(eventName, cb);
    return function useSocketCleanup() {
      socket.off(eventName, cb);
    };
  }, [eventName, cb]);
  return socket;
}
const socketClient = (/* unused pure expression or super */ null && (socket));

/***/ }),

/***/ 9254:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const theme = {
  pink: '#F12152',
  navy: '#1D2E3C',
  darkNavy: '#00070c',
  blue: '#4378f7',
  white: '#FFFFFF',
  black: '#000000',
  gray: '#FFFFFF',
  waitingBg: '#2d4b6560',
  onAirBg: '#65061c26',
  whiteShadow: '0px 1px 5px 3px #72727290',
  blueShadow: '0px 1px 3px 3px #668dea90',
  pinkShadow: '0px 1px 3px 3px #F1215290',
  blackShadow: '0px 1px 5px 3px rgba(0, 0, 0, 0.1)',
  textWhiteShadow: '0 0 5px #ffffffb7, 0 0 5px #ffffff8b, 0 0 10px #ffffffc7'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);

/***/ })

};
;