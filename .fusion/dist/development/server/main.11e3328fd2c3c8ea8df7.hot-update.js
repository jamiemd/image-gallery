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
/* harmony import */ var fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fusion-plugin-react-router */ "fusion-plugin-react-router");
/* harmony import */ var fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Components_add_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/add-image */ "./src/Components/add-image.js");
/* harmony import */ var _Components_pop_up__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/pop-up */ "./src/Components/pop-up.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class Album extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleClick", event => {
      console.log("event.target.value", event.target.value);
      this.props.popupToggle();
    });
  }

  componentDidMount() {
    const albumId = this.props.match.params.id;
    this.props.findAlbum(albumId);
  }

  render() {
    if (this.props.togglePopup === true) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_pop_up__WEBPACK_IMPORTED_MODULE_5__["default"], null);
    } else return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: albumContainer
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      style: homeLink,
      to: "/"
    }, "Home"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: albumName
    }, this.props.album.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_add_image__WEBPACK_IMPORTED_MODULE_4__["default"], {
      albumId: this.props.match.params.id
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: imagesBox
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: imagesContainer
    }, this.props.album.images.map((image, i) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      key: i,
      onSubmit: this.handleClick
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      style: removeImage
    }, "x"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      style: imageContainer,
      src: image.imagePreviewUrl
    }))))));
  }

}

const albumContainer = {
  fontFamily: "HelveticaNeue-Light, Arial",
  width: "80%",
  margin: "auto",
  paddingTop: "20px"
};
const imagesBox = {
  justifyContent: "center",
  marginTop: "40px"
};
const imagesContainer = {
  margin: "auto",
  display: "grid",
  gridTemplateColumns: "repeat(4, 300px)",
  justifyContent: "space-around"
};
const imageContainer = {
  maxWidth: "300px",
  maxHeight: "300px",
  backgroundColor: "#F0F0F0",
  borderRadius: "12px"
};
const homeLink = {
  textDecoration: "none",
  fontSize: "20px",
  fontWeight: "600"
};
const albumName = {
  fontSize: "25px",
  textAlign: "center",
  fontWeight: "500"
};
const removeImage = {};

const mapStateToProps = state => {
  console.log("state", state);
  return {
    album: state.album || {
      images: []
    },
    togglePopup: state.togglePopup
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, {
  findAlbum: _actions_albums__WEBPACK_IMPORTED_MODULE_1__["findAlbum"],
  popupToggle: _actions_albums__WEBPACK_IMPORTED_MODULE_1__["popupToggle"]
})(Album));

/***/ })

};
//# sourceMappingURL=main.11e3328fd2c3c8ea8df7.hot-update.js.map