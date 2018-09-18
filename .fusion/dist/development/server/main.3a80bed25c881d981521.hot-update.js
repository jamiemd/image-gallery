if(process.env.NODE_ENV && process.env.NODE_ENV !== 'development') {if ('development' === 'production') {throw new Error(`NODE_ENV (${process.env.NODE_ENV}) does not match value for compiled assets: development`);} else {console.warn('Overriding NODE_ENV: ' + process.env.NODE_ENV + ' to development in order to match value for compiled assets');process.env.NODE_ENV = 'development';}} else {process.env.NODE_ENV = 'development';}
require('/Users/jamie/GitHub/image-gallery/node_modules/source-map-support/source-map-support.js').install();
exports.id = "main";
exports.modules = {

/***/ "./src/pages/home.js":
/*!***************************!*\
  !*** ./src/pages/home.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fusion-plugin-styletron-react */ "fusion-plugin-styletron-react");
/* harmony import */ var fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_1__);



class Home extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HomeContainer, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Image Gallery"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", null, "+"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AlbumsGrid, null));
  }

}

const HomeContainer = Object(fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])("div", {
  fontFamily: "HelveticaNeue-Light, Arial",
  margin: "auto",
  width: "80%"
});
const AlbumsGrid = Object(fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])("div", {
  display: "flex",
  justifyContent: "center"
});
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

};
//# sourceMappingURL=main.3a80bed25c881d981521.hot-update.js.map