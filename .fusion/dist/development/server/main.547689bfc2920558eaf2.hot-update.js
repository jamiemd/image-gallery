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
/* harmony import */ var fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fusion-plugin-react-router */ "fusion-plugin-react-router");
/* harmony import */ var fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Components_create_album_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/create-album.js */ "./src/Components/create-album.js");
/* harmony import */ var _actions_albums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/albums */ "./src/actions/albums.js");






class Home extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAlbums();
  }

  render() {
    console.log("this.props", this.props);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: homeContainer
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Image Gallery"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_create_album_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
      history: this.props.history
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: albumsContainer
    }, this.props.albumsArray.map((album, i) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__["Link"], {
      style: albumContainer,
      key: i,
      to: `/findAlbum/${album._id}`
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, album.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      style: imageContainer,
      src: album.images[0].imagePreviewUrl
    })))));
  }

}

const homeContainer = {
  fontFamily: "HelveticaNeue-Light, Arial",
  margin: "auto",
  width: "95%"
};
const albumsContainer = {
  margin: "30px",
  display: "grid",
  gridTemplateColumns: "repeat(4, 350px)",
  gridGap: "5px"
};
const albumContainer = {
  backgroundColor: "gray",
  margin: "20px",
  width: "300px",
  height: "300px",
  borderRadius: "12px"
};
const imageContainer = {
  maxWidth: "300px",
  maxHeight: "300px"
};

const mapStateToProps = state => {
  return {
    albumsArray: state.albums || [],
    columns: state.columns || []
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, {
  getAlbums: _actions_albums__WEBPACK_IMPORTED_MODULE_4__["getAlbums"],
  createAlbum: _actions_albums__WEBPACK_IMPORTED_MODULE_4__["createAlbum"]
})(Home));

/***/ })

};
//# sourceMappingURL=main.547689bfc2920558eaf2.hot-update.js.map