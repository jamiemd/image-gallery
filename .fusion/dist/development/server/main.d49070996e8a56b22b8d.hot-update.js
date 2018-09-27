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

    _defineProperty(this, "handleDeleteAlbumCancel", () => {
      this.props.showDeleteAlbumPopup();
    });

    _defineProperty(this, "handleDeleteImageCancel", () => {
      this.props.showDeleteImagePopup();
    });

    _defineProperty(this, "handleDeleteImage", (imageToDeleteId, albumId) => {
      this.props.showDeleteImagePopup();
      this.props.deleteImage(imageToDeleteId, albumId);
    });
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: popupContainer
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: popupBox
    }, this.props.showDeleteAlbumPopupBool ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: text
    }, "Delete Album?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: buttonContainer
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      style: buttonStyle,
      onClick: this.handleDeleteAlbumCancel
    }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      style: buttonStyle,
      onClick: () => this.handleDeleteImageClick(this.props.imageToDeleteId, this.props.albumId)
    }, "Yes"))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: text
    }, "Delete Image?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: buttonContainer
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      style: buttonStyle,
      onClick: this.handleDeletePopup
    }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      style: buttonStyle,
      onClick: () => this.handleDeleteImageClick(this.props.imageToDeleteId, this.props.albumId)
    }, "Yes")))));
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
  width: "400px",
  height: "200px",
  backgroundColor: "white",
  margin: "auto"
};
const buttonContainer = {
  display: "flex",
  justifyContent: "space-around"
};
const buttonStyle = {
  border: ".5px solid",
  fontSize: "16px",
  padding: "5px",
  width: "100px",
  height: "40px"
};
const text = {
  textAlign: "center",
  paddingTop: "40px",
  paddingBottom: "40px",
  fontSize: "25px"
};

const mapStateToProps = state => {
  console.log("state in delete", state);
  return {
    albumId: state.album._id,
    imageToDeleteId: state.imageToDeleteId,
    albumToDeleteId: state.albumToDeleteId,
    showDeleteAlbumPopupBool: state.showDeleteAlbumPopupBool,
    showDeleteImagePopupBool: state.showDeleteImagePopupBool
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  showDeleteAlbumPopup: _actions_albums__WEBPACK_IMPORTED_MODULE_2__["showDeleteAlbumPopup"],
  showDeleteImagePopup: _actions_albums__WEBPACK_IMPORTED_MODULE_2__["showDeleteImagePopup"],
  deleteImage: _actions_albums__WEBPACK_IMPORTED_MODULE_2__["deleteImage"]
})(DeletePopup));

/***/ })

};
//# sourceMappingURL=main.d49070996e8a56b22b8d.hot-update.js.map