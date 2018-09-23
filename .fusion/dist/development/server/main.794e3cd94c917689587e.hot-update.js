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
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



class Album extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();

    _defineProperty(this, "handleSave", () => {
      console.log("save button clicked");
    });
  }

  componentDidMount() {
    const albumId = this.props.match.params.id;
    console.log("albumId", albumId); // const { history } = this.props;

    this.props.findAlbum(decisionCode, history);
  }

  render() {
    // console.log("this.state.albumArray", this.state.albumArray);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: albumContainer
    }, "hi");
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
/* harmony default export */ __webpack_exports__["default"] = (Album);

/***/ })

};
//# sourceMappingURL=main.794e3cd94c917689587e.hot-update.js.map