if(process.env.NODE_ENV && process.env.NODE_ENV !== 'development') {if ('development' === 'production') {throw new Error(`NODE_ENV (${process.env.NODE_ENV}) does not match value for compiled assets: development`);} else {console.warn('Overriding NODE_ENV: ' + process.env.NODE_ENV + ' to development in order to match value for compiled assets');process.env.NODE_ENV = 'development';}} else {process.env.NODE_ENV = 'development';}
require('/Users/jamie/GitHub/image-gallery/node_modules/source-map-support/source-map-support.js').install();
exports.id = "main";
exports.modules = {

/***/ "./src/pages/create-album.js":
/*!***********************************!*\
  !*** ./src/pages/create-album.js ***!
  \***********************************/
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





class CreateAlbum extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleUpload", event => {
      let reader = new FileReader();
      let file = event.target.files[0];

      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      };

      reader.readAsDataURL(file);
    });

    _defineProperty(this, "handleSave", event => {
      event.preventDefault();
      const name = this.props.albumName;
      const images = {
        file: this.state.file,
        imagePreviewUrl: this.state.imagePreviewUrl
      };
      this.props.createAlbum(name, images);
    });

    this.state = {
      file: "",
      imagePreviewUrl: ""
    };
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, this.props.albumName), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      type: "file",
      onChange: e => this.handleUpload(e)
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: this.handleSave
    }, "Save")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "example__images-container"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "example__images"
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: this.state.imagePreviewUrl
    }));
  }

}

const mapStateToProps = state => {
  return {
    albumName: state.albumName
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  createAlbum: _actions_albums__WEBPACK_IMPORTED_MODULE_2__["createAlbum"]
})(CreateAlbum));

/***/ })

};
//# sourceMappingURL=main.8a4009ac8a3ea3165b61.hot-update.js.map