if(process.env.NODE_ENV && process.env.NODE_ENV !== 'development') {if ('development' === 'production') {throw new Error(`NODE_ENV (${process.env.NODE_ENV}) does not match value for compiled assets: development`);} else {console.warn('Overriding NODE_ENV: ' + process.env.NODE_ENV + ' to development in order to match value for compiled assets');process.env.NODE_ENV = 'development';}} else {process.env.NODE_ENV = 'development';}
require('/Users/jamie/GitHub/image-gallery/node_modules/source-map-support/source-map-support.js').install();
exports.id = "main";
exports.modules = {

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return start; });
/* harmony import */ var fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fusion-plugin-react-router */ "fusion-plugin-react-router");
/* harmony import */ var fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fusion-plugin-styletron-react */ "fusion-plugin-styletron-react");
/* harmony import */ var fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./root.js */ "./src/root.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var fusion_plugin_react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fusion-plugin-react-redux */ "fusion-plugin-react-redux");
/* harmony import */ var fusion_plugin_react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fusion_plugin_react_redux__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! redux-thunk */ "redux-thunk");
/* harmony import */ var redux_thunk__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(redux_thunk__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var fusion_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! fusion-react */ "fusion-react");
/* harmony import */ var fusion_react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(fusion_react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _reducers_albums__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./reducers/albums */ "./src/reducers/albums.js");
/* harmony import */ var _server_routes__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./server/routes */ "./src/server/routes.js");










function start() {
  const app = new fusion_react__WEBPACK_IMPORTED_MODULE_7___default.a(_root_js__WEBPACK_IMPORTED_MODULE_2__["default"]);
  app.register(fusion_plugin_react_redux__WEBPACK_IMPORTED_MODULE_4__["ReduxToken"], fusion_plugin_react_redux__WEBPACK_IMPORTED_MODULE_4___default.a);
  app.register(fusion_plugin_react_redux__WEBPACK_IMPORTED_MODULE_4__["ReducerToken"], _reducers_albums__WEBPACK_IMPORTED_MODULE_8__["default"]);
  app.register(fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_1___default.a);
  app.register(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_0___default.a);
  app.register(fusion_plugin_react_redux__WEBPACK_IMPORTED_MODULE_4__["EnhancerToken"], Object(redux__WEBPACK_IMPORTED_MODULE_6__["applyMiddleware"])(redux_thunk__WEBPACK_IMPORTED_MODULE_5___default.a));
  true && app.register(_server_routes__WEBPACK_IMPORTED_MODULE_9__["default"]);
  true && app.register(fusion_plugin_react_redux__WEBPACK_IMPORTED_MODULE_4__["GetInitialStateToken"], async ctx => ({
    columns: [[], [], [], [], []],
    albumsArray: [],
    imagePreview: ""
  }));
  return app;
}

/***/ })

};
//# sourceMappingURL=main.fe3677718caf6aad6a57.hot-update.js.map