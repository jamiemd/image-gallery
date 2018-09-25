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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Components_create_album_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/create-album.js */ "./src/Components/create-album.js");
/* harmony import */ var _actions_albums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/albums */ "./src/actions/albums.js");





class Home extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getAlbums();
  }

  render() {
    console.log("this.props.columns", this.props.columns);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: homeContainer
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Image Gallery"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_create_album_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
      history: this.props.history
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: albumsContainer
    }, this.props.columns.map((column, i) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: i,
      style: {
        backgroundColor: "gray",
        height: "300px",
        width: "300px",
        margin: "20px"
      }
    }, column))));
  }

}

const homeContainer = {
  fontFamily: "HelveticaNeue-Light, Arial",
  margin: "auto",
  width: "90%"
};
const albumsContainer = {
  margin: "30px",
  display: "flex"
};
const albumContainer = {
  margin: "20px",
  backgroundColor: "gray",
  width: "300px",
  height: "300px"
};
const imageContainer = {
  maxWidth: "300px",
  maxHeight: "300px"
};

const mapStateToProps = state => {
  console.log("state", state);
  return {
    albumsArray: state.albums || [],
    columns: state.columns || []
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  getAlbums: _actions_albums__WEBPACK_IMPORTED_MODULE_3__["getAlbums"],
  createAlbum: _actions_albums__WEBPACK_IMPORTED_MODULE_3__["createAlbum"]
})(Home));

/***/ })

};
//# sourceMappingURL=main.3860dc64c4af51d43196.hot-update.js.map