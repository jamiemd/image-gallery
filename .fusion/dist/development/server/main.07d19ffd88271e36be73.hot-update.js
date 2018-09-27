if(process.env.NODE_ENV && process.env.NODE_ENV !== 'development') {if ('development' === 'production') {throw new Error(`NODE_ENV (${process.env.NODE_ENV}) does not match value for compiled assets: development`);} else {console.warn('Overriding NODE_ENV: ' + process.env.NODE_ENV + ' to development in order to match value for compiled assets');process.env.NODE_ENV = 'development';}} else {process.env.NODE_ENV = 'development';}
require('/Users/jamie/GitHub/image-gallery/node_modules/source-map-support/source-map-support.js').install();
exports.id = "main";
exports.modules = {

/***/ "./src/Components/pop-up.js":
/*!**********************************!*\
  !*** ./src/Components/pop-up.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_albums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/albums */ "./src/actions/albums.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





class Popup extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleToggle", () => {
      this.props.popupToggle();
    });

    _defineProperty(this, "handleDelete", event => {
      console.log("event", event);
      this.props.popupToggle();
    });
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: popUpContainer
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Delete this image?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: this.handleToggle
    }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: this.handleDelete
    }, "Yes")));
  }

}

const popUpContainer = {
  borderRadius: "12px",
  width: "300px",
  backgroundColor: "red"
};
const popup = {
  width: "200px",
  height: "100px"
};

const mapStateToProps = state => {
  console.log("state", state);
  return {};
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  findAlbum: _actions_albums__WEBPACK_IMPORTED_MODULE_2__["findAlbum"],
  popupToggle: _actions_albums__WEBPACK_IMPORTED_MODULE_2__["popupToggle"]
})(Popup));

/***/ })

};
//# sourceMappingURL=main.07d19ffd88271e36be73.hot-update.js.map