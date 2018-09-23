if(process.env.NODE_ENV && process.env.NODE_ENV !== 'development') {if ('development' === 'production') {throw new Error(`NODE_ENV (${process.env.NODE_ENV}) does not match value for compiled assets: development`);} else {console.warn('Overriding NODE_ENV: ' + process.env.NODE_ENV + ' to development in order to match value for compiled assets');process.env.NODE_ENV = 'development';}} else {process.env.NODE_ENV = 'development';}
require('/Users/jamie/GitHub/image-gallery/node_modules/source-map-support/source-map-support.js').install();
exports.id = "main";
exports.modules = {

/***/ "./src/pages/album.js":
/*!****************************!*\
  !*** ./src/pages/album.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _actions_albums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/albums */ "./src/actions/albums.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class Album extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "handleSave", () => {
      console.log("save button clicked");
    });
  }

  componentDidMount() {
    const albumId = this.props.match.params.id;
    console.log("albumId", albumId);
    this.props.findAlbum(albumId);
  }

  render() {
    console.log("this.props.albumArray", this.props.albumArray);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: albumContainer
    }, "hi", this.state.albumArray.map((image, i) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: i,
      style: _objectSpread({
        height: image.height,
        width: image.width
      }, bg)
    }, image.height)));
  }

}

const albumContainer = {
  width: "80%",
  display: "flex",
  justifyContent: "center"
};
const bg = {
  backgroundColor: "gray",
  margin: "20px"
};

const mapStateToProps = state => {
  console.log("state", state);
  return {
    albumArray: state.album || []
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, {
  findAlbum: _actions_albums__WEBPACK_IMPORTED_MODULE_1__["findAlbum"]
})(Album));

/***/ })

};
//# sourceMappingURL=main.6e8abb5ac5144f3c8efa.hot-update.js.map