"use strict";
exports.id = 237;
exports.ids = [237];
exports.modules = {

/***/ 7237:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9297);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6177);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_emotion_styled__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





function Header({
  openModal,
  loginStatus
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(HeaderWrapper, {
    loginStatus: loginStatus,
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
      href: "/main",
      passHref: true,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
        className: "nav",
        children: "CHANNEL"
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(next_link__WEBPACK_IMPORTED_MODULE_1__.default, {
      href: "/",
      passHref: true,
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
        className: "nav logo",
        children: "VLIVE"
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("span", {
      href: "/channel",
      className: "nav create-channel",
      onClick: openModal,
      children: "CREATE CHANNEL"
    })]
  });
}
const HeaderWrapper = (_emotion_styled__WEBPACK_IMPORTED_MODULE_2___default().header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 10vh;
  text-align: center;
  background-color: ${({
  theme
}) => theme.darkNavy};
  box-shadow: ${({
  theme
}) => theme.blueShadow};

  .nav {
    width: 33.3vh;
    box-sizing: border-box;
    cursor: pointer;
    font-weight: 600;
    font-size: 1.1em;
    color: ${({
  theme
}) => theme.white};

    :hover {
      color: ${({
  theme
}) => theme.blue};
    }
  }

  .logo {
    font-weight: 800;
    font-size: 2em;
    color: ${({
  theme
}) => theme.blue};
  }

  .app-name {
    margin: 0;
    padding: 18px 40px;
    height: 100%;
    line-height: 4vh;
    font-size: 40px;
    color: ${({
  theme
}) => theme.blue};
  }

  .create-channel {
    cursor: ${({
  loginStatus
}) => !loginStatus ? 'not-allowed' : 'pointer'};
    pointer-events: ${({
  loginStatus
}) => !loginStatus ? 'none' : 'auto'};
  }
`;

/***/ })

};
;