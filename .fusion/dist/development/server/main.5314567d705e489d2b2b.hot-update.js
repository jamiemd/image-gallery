if(process.env.NODE_ENV && process.env.NODE_ENV !== 'development') {if ('development' === 'production') {throw new Error(`NODE_ENV (${process.env.NODE_ENV}) does not match value for compiled assets: development`);} else {console.warn('Overriding NODE_ENV: ' + process.env.NODE_ENV + ' to development in order to match value for compiled assets');process.env.NODE_ENV = 'development';}} else {process.env.NODE_ENV = 'development';}
require('/Users/jamie/GitHub/image-gallery/node_modules/source-map-support/source-map-support.js').install();
exports.id = "main";
exports.modules = {

/***/ "./src/Components/delete-popup.js":
/*!****************************************!*\
  !*** ./src/Components/delete-popup.js ***!
  \****************************************/
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





class DeletePopup extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleDeletePopup", () => {
      this.props.showDeletePopup();
    });

    _defineProperty(this, "handleDelete", imageToDelete => {
      console.log("imageId in popup delete", imageToDelete);
      this.props.showDeletePopup();
      this.props.deleteImage(imageToDelete);
    });
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: popupContainer
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: popupBox
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Delete this image?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: this.handleDeletePopup
    }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: () => this.handleDelete(this.props.imageToDelete)
    }, "Yes")));
  }

}

const popupContainer = {
  zIndex: "1",
  overflow: "auto",
  backgroundColor: "rgba(0,0,0,0.4)",
  position: "fixed",
  height: "100%",
  width: "100%",
  left: "0",
  top: "0",
  display: "flex"
};
const popupBox = {
  maxWidth: "1000px",
  maxHeight: "1000px",
  paddingLeft: "15px",
  paddingRight: "15px",
  paddingBottom: "15px",
  backgroundColor: "white",
  margin: "auto"
};
const popup = {
  width: "200px",
  height: "100px"
};

const mapStateToProps = state => {
  console.log("state in popup", state);
  return {
    imageToDelete: state.imageToDelete
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  showDeletePopup: _actions_albums__WEBPACK_IMPORTED_MODULE_2__["showDeletePopup"],
  deleteImage: _actions_albums__WEBPACK_IMPORTED_MODULE_2__["deleteImage"]
})(DeletePopup));

/***/ })

};
//# sourceMappingURL=main.5314567d705e489d2b2b.hot-update.js.map