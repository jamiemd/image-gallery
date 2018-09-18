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
/* harmony import */ var fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fusion-plugin-react-router */ "fusion-plugin-react-router");
/* harmony import */ var fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _album_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./album.js */ "./src/pages/album.js");
/* harmony import */ var _components_AddImage_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/AddImage.js */ "./src/components/AddImage.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class Home extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();

    _defineProperty(this, "handleAddImage", () => {
      console.log("add image clicked");
    });

    this.state = {
      albumsArray: [[{
        height: 100,
        width: 300
      }, {
        height: 200,
        width: 300
      }, {
        height: 250,
        width: 200
      }], [{
        height: 420,
        width: 300
      }, {
        height: 200,
        width: 300
      }, {
        height: 500,
        width: 300
      }], [{
        height: 360,
        width: 300
      }, {
        height: 200,
        width: 300
      }], [{
        height: 360,
        width: 300
      }, {
        height: 200,
        width: 300
      }]]
    };
  }

  render() {
    console.log("this.state.albumsArray", this.state.albumsArray);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HomeContainer, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Image Gallery"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: this.handleAddImage
    }, "+"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_2__["Link"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AlbumsContainer, null, this.state.albumsArray.map((album, i) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AlbumContainer, {
      key: i
    }, album[0].height)))));
  }

}

const HomeContainer = Object(fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])("div", {
  fontFamily: "HelveticaNeue-Light, Arial",
  margin: "auto",
  width: "80%"
});
const AlbumsContainer = Object(fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])("div", {
  margin: "30px",
  display: "flex"
});
const AlbumContainer = Object(fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])("div", {
  margin: "20px",
  width: "300px",
  height: "300px",
  backgroundColor: "gray"
});
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ })

};
//# sourceMappingURL=main.8191da0e80e8961797d4.hot-update.js.map