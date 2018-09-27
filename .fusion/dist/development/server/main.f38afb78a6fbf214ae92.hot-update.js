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
/* harmony import */ var _Components_delete_popup__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/delete-popup */ "./src/Components/delete-popup.js");
/* harmony import */ var _Components_image_popup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Components/image-popup */ "./src/Components/image-popup.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









class Album extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleDeleteAlbumClick", albumToDelete => {
      this.props.showDeleteAlbumPopup(albumToDelete);
    });

    _defineProperty(this, "handleDeleteImageClick", imageToDelete => {
      this.props.showDeleteImagePopup(imageToDelete);
    });

    _defineProperty(this, "handleImagePopupClick", imageToExpand => {
      this.props.showImagePopup(imageToExpand);
    });
  }

  componentDidMount() {
    const albumId = this.props.match.params.id;
    this.props.findAlbum(albumId);
  } // handleDeletePopUp = albumToDelete => {
  //   console.log("albumToDelete", albumToDelete);
  //   // this.props.showDeletePopup(imageToDelete);
  // };


  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: albumContainer
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, this.props.showDeleteAlbumPopupBool ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_delete_popup__WEBPACK_IMPORTED_MODULE_5__["default"], null) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, this.props.showDeleteImagePopupBool ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_delete_popup__WEBPACK_IMPORTED_MODULE_5__["default"], null) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, this.props.showImagePopupBool ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_image_popup__WEBPACK_IMPORTED_MODULE_6__["default"], null) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      style: homeLink,
      to: "/"
    }, "Home"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: titleContainer
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: albumName
    }, this.props.album.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: deleteAlbumButton,
      onClick: () => this.handleDeleteAlbumClick(this.props.album._id)
    }, "\xD7")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_add_image__WEBPACK_IMPORTED_MODULE_4__["default"], {
      albumId: this.props.match.params.id
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: imagesBox
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: imagesContainer
    }, this.props.album.images.map((image, i) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: i
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: () => this.handleDeleteImageClick(image._id)
    }, "\xD7"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      onClick: () => this.handleImagePopupClick(image.imagePreviewUrl)
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      style: imageContainer,
      src: image.imagePreviewUrl
    })))))));
  }

}

const albumContainer = {
  fontFamily: "HelveticaNeue-Light, Arial",
  width: "80%",
  margin: "auto",
  paddingTop: "20px"
};
const titleContainer = {
  display: "flex",
  justifyContent: "center"
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
  backgroundColor: "#F0F0F0"
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
const deleteAlbumButton = {
  paddingLeft: "20px"
};

const mapStateToProps = state => {
  console.log("showDeleteAlbumPopupBool", showDeleteAlbumPopupBool);
  return {
    album: state.album || {
      images: []
    },
    showDeleteAlbumPopupBool: state.showDeleteAlbumPopupBool,
    showDeleteImagePopupBool: state.showDeleteImagePopupBool,
    showImagePopupBool: state.showImagePopupBool
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, {
  findAlbum: _actions_albums__WEBPACK_IMPORTED_MODULE_1__["findAlbum"],
  showDeleteAlbumPopup: _actions_albums__WEBPACK_IMPORTED_MODULE_1__["showDeleteAlbumPopup"],
  showDeleteImagePopup: _actions_albums__WEBPACK_IMPORTED_MODULE_1__["showDeleteImagePopup"],
  showImagePopup: _actions_albums__WEBPACK_IMPORTED_MODULE_1__["showImagePopup"]
})(Album));

/***/ })

};
//# sourceMappingURL=main.f38afb78a6fbf214ae92.hot-update.js.map