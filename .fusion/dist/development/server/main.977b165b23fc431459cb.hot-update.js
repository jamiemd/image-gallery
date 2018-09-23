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
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions_albums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../actions/albums */ "./src/actions/albums.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







class Home extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleChange", event => {
      this.setState({
        value: event.target.value
      });
    });

    _defineProperty(this, "handleSubmit", event => {
      const albumName = this.state.value;
      this.props.createAlbumName({
        albumName
      });
      const {
        history
      } = this.props;
      history.push("/create-album");
      event.preventDefault();
    });

    this.state = {
      value: ""
    };
  }

  componentDidMount() {
    this.props.getAlbums();
  }

  render() {
    console.log("this.props.albumsArray", this.props.albumsArray);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HomeContainer, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Image Gallery"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
      onSubmit: this.handleSubmit
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, "Create New Album"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "text",
      onChange: this.handleChange
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      type: "submit"
    }, "Continue")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      to: "/album"
    }, this.props.albumsArray ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AlbumsContainer, null, this.props.albumsArray.map((album, i) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AlbumContainer, {
      key: i
    }, album.map((image, i) => ({
      image
    }))))) : null));
  }

} // <AlbumContainer key={i}>
// {album.images.map((image, i) => (
//   <div key={i}>{image}</div>
// ))}
// </AlbumContainer>


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

const mapStateToProps = state => {
  console.log("state", state);
  return {
    albumsArray: state.albums
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(mapStateToProps, {
  getAlbums: _actions_albums__WEBPACK_IMPORTED_MODULE_4__["getAlbums"],
  createAlbumName: _actions_albums__WEBPACK_IMPORTED_MODULE_4__["createAlbumName"]
})(Home));

/***/ })

};
//# sourceMappingURL=main.977b165b23fc431459cb.hot-update.js.map