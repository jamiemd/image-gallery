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
      this.props.showDeleteImagePopup();
    });

    _defineProperty(this, "handleDelete", (imageToDeleteId, albumId) => {
      this.props.showDeleteImagePopup();
      this.props.deleteImage(imageToDeleteId, albumId);
    });
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: popupContainer
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: popupBox
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: text
    }, "Delete image?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: buttonContainer
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      style: buttonStyle,
      onClick: this.handleDeletePopup
    }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      style: buttonStyle,
      onClick: () => this.handleDelete(this.props.imageToDeleteId, this.props.albumId)
    }, "Yes"))));
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
  return {
    albumId: state.album._id,
    imageToDeleteId: state.imageToDeleteId
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  showDeletePopup,
  deleteImage: _actions_albums__WEBPACK_IMPORTED_MODULE_2__["deleteImage"]
})(DeletePopup));

/***/ }),

/***/ "./src/actions/albums.js":
/*!*******************************!*\
  !*** ./src/actions/albums.js ***!
  \*******************************/
/*! exports provided: GET_ALBUMS, GET_ALBUM, CREATE_ALBUM, ADD_IMAGE, SHOW_ALBUM_IMAGE_POPUP, SHOW_DELETE_IMAGE_POPUP, SHOW_IMAGE_POPUP, DELETE_ALBUM, DELETE_IMAGE, getAlbums, findAlbum, createAlbum, addImage, showDeleteAlbumPopup, showDeleteImagePopup, showImagePopup, deleteAlbum, deleteImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALBUMS", function() { return GET_ALBUMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALBUM", function() { return GET_ALBUM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_ALBUM", function() { return CREATE_ALBUM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_IMAGE", function() { return ADD_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_ALBUM_IMAGE_POPUP", function() { return SHOW_ALBUM_IMAGE_POPUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_DELETE_IMAGE_POPUP", function() { return SHOW_DELETE_IMAGE_POPUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_IMAGE_POPUP", function() { return SHOW_IMAGE_POPUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_ALBUM", function() { return DELETE_ALBUM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_IMAGE", function() { return DELETE_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAlbums", function() { return getAlbums; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findAlbum", function() { return findAlbum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAlbum", function() { return createAlbum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addImage", function() { return addImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showDeleteAlbumPopup", function() { return showDeleteAlbumPopup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showDeleteImagePopup", function() { return showDeleteImagePopup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showImagePopup", function() { return showImagePopup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAlbum", function() { return deleteAlbum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteImage", function() { return deleteImage; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const GET_ALBUMS = "GET_ALBUMS";
const GET_ALBUM = "GET_ALBUM";
const CREATE_ALBUM = "CREATE_ALBUM";
const ADD_IMAGE = "ADD_IMAGE";
const SHOW_ALBUM_IMAGE_POPUP = "SHOW_ALBUM_IMAGE_POPUP";
const SHOW_DELETE_IMAGE_POPUP = "SHOW_DELETE_IMAGE_POPUP";
const SHOW_IMAGE_POPUP = "SHOW_IMAGE_POPUP";
const DELETE_ALBUM = "DELETE_ALBUM";
const DELETE_IMAGE = "DELETE_IMAGE";
const ROOT_URL = "http://localhost:3000/api"; // get all albums

const getAlbums = () => {
  return dispatch => {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${ROOT_URL}/getAlbums`).then(res => {
      console.log("res.data", res.data);
      dispatch({
        type: GET_ALBUMS,
        payload: res.data
      });
    }).catch(error => {
      console.log("error", error.response);
    });
  };
}; // find album

const findAlbum = albumId => {
  return dispatch => {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${ROOT_URL}/findAlbum/${albumId}`).then(res => {
      dispatch({
        type: GET_ALBUM,
        payload: res.data
      });
    }).catch(error => {
      console.log("error", error.response);
    });
  };
}; // create album

const createAlbum = (albumName, history) => {
  return dispatch => {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${ROOT_URL}/create-album`, {
      albumName
    }).then(res => {
      dispatch({
        type: CREATE_ALBUM,
        payload: res.data
      });
      history.push("/findAlbum/" + res.data.albumId);
    }).catch(error => {
      console.log("error.response in create album", error.response);
    });
  };
}; // add images

const addImage = (image, albumId) => {
  return dispatch => {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.put(`${ROOT_URL}/add-image/${albumId}`, {
      image
    }).then(res => {
      console.log("res.data in add image", res.data);
      dispatch({
        type: ADD_IMAGE,
        payload: res.data
      });
    }).catch(error => {
      console.log("error.response", error.response);
    });
  };
}; // delete album popup

const showDeleteAlbumPopup = albumToDeleteId => {
  return {
    type: SHOW_DELETE_ALBUM_POPUP,
    payload: albumToDeleteId
  };
}; // delete image popup

const showDeleteImagePopup = imageToDeleteId => {
  return {
    type: SHOW_DELETE_IMAGE_POPUP,
    payload: imageToDeleteId
  };
}; // show image popup

const showImagePopup = imageToShow => {
  return {
    type: SHOW_IMAGE_POPUP,
    payload: imageToShow
  };
};
const deleteAlbum = albumId => {
  return dispatch => {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`${ROOT_URL}/delete-album/${albumId}`).then(res => {
      disptach({
        type: DELETE_ALBUM,
        payload: res.data
      });
    }).catch(error => {
      console.log("error.response", error.response);
    });
  };
};
const deleteImage = (imageToDelete, albumId) => {
  return dispatch => {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${ROOT_URL}/delete-image`, {
      imageToDelete,
      albumId
    }).then(res => {
      console.log("res in delete image", res.data);
      disptach({
        type: DELETE_IMAGE,
        payload: res.data
      });
    }).catch(error => {
      console.log("error.response", error.response);
    });
  };
};

/***/ }),

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

    _defineProperty(this, "handleDeletePopUp", albumToDelete => {
      console.log("albumToDelete", albumToDelete); // this.props.showDeletePopup(imageToDelete);
    });

    _defineProperty(this, "handleDeleteAlbum", albumToDelete => {
      console.log("albumToDelete", albumToDelete); // this.props.showDeletePopup(imageToDelete);
    });

    _defineProperty(this, "handleDeleteImage", imageToDelete => {
      this.props.showDeleteImagePopup(imageToDelete);
    });

    _defineProperty(this, "handleImagePopup", imageToExpand => {
      this.props.showImagePopup(imageToExpand);
    });
  }

  componentDidMount() {
    const albumId = this.props.match.params.id;
    this.props.findAlbum(albumId);
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: albumContainer
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, this.props.showDeleteImagePopupBool ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_delete_popup__WEBPACK_IMPORTED_MODULE_5__["default"], null) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, this.props.showImagePopupBool ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_image_popup__WEBPACK_IMPORTED_MODULE_6__["default"], null) : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_3__["Link"], {
      style: homeLink,
      to: "/"
    }, "Home"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: titleContainer
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: albumName
    }, this.props.album.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: deleteAlbumButton,
      onClick: () => this.handleDeleteAlbum(this.props.album._id)
    }, "\xD7")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Components_add_image__WEBPACK_IMPORTED_MODULE_4__["default"], {
      albumId: this.props.match.params.id
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: imagesBox
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: imagesContainer
    }, this.props.album.images.map((image, i) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: i
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: () => this.handleDeleteImage(image._id)
    }, "\xD7"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      onClick: () => this.handleImagePopup(image.imagePreviewUrl)
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
  return {
    album: state.album || {
      images: []
    },
    showDeleteImagePopupBool: state.showDeleteImagePopupBool,
    showImagePopupBool: state.showImagePopupBool
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, {
  findAlbum: _actions_albums__WEBPACK_IMPORTED_MODULE_1__["findAlbum"],
  showDeleteImagePopup: _actions_albums__WEBPACK_IMPORTED_MODULE_1__["showDeleteImagePopup"],
  showImagePopup: _actions_albums__WEBPACK_IMPORTED_MODULE_1__["showImagePopup"]
})(Album));

/***/ }),

/***/ "./src/reducers/albums.js":
/*!********************************!*\
  !*** ./src/reducers/albums.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _actions_albums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/albums */ "./src/actions/albums.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = ((state, action) => {
  // console.log("action.payload", action.payload);
  switch (action.type) {
    case _actions_albums__WEBPACK_IMPORTED_MODULE_0__["GET_ALBUMS"]:
      return _objectSpread({}, state, {
        albums: action.payload.albums
      });

    case _actions_albums__WEBPACK_IMPORTED_MODULE_0__["GET_ALBUM"]:
      return {
        album: action.payload.album
      };

    case _actions_albums__WEBPACK_IMPORTED_MODULE_0__["CREATE_ALBUM"]:
      return _objectSpread({}, action.payload);

    case _actions_albums__WEBPACK_IMPORTED_MODULE_0__["ADD_IMAGE"]:
      return _objectSpread({}, state, action.payload);

    case SHOW_DELETE_SHOW_DELETE_ALBUM_POPUP_POPUP:
      if (state.showDeleteAlbumPopupBool === true) {
        return _objectSpread({}, state, {
          showDeleteAlbumPopupBool: false
        });
      } else {
        return _objectSpread({}, state, {
          showDeleteAlbumPopupBool: true,
          albumToDeleteId: action.payload
        });
      }

    case SHOW_DELETE_IMAGE_POPUP:
      if (state.showDeleteImagePopupBool === true) {
        return _objectSpread({}, state, {
          showDeleteImagePopupBool: false
        });
      } else {
        return _objectSpread({}, state, {
          showDeleteImagePopupBool: true,
          imageToDeleteId: action.payload
        });
      }

    case _actions_albums__WEBPACK_IMPORTED_MODULE_0__["SHOW_IMAGE_POPUP"]:
      if (state.showImagePopupBool === true) {
        return _objectSpread({}, state, {
          showImagePopupBool: false
        });
      }

      return _objectSpread({}, state, {
        showImagePopupBool: true,
        imageToShow: action.payload
      });

    case _actions_albums__WEBPACK_IMPORTED_MODULE_0__["DELETE_ALBUM"]:
      return _objectSpread({}, action.payload);

    case _actions_albums__WEBPACK_IMPORTED_MODULE_0__["DELETE_IMAGE"]:
      return _objectSpread({}, action.payload);

    default:
      return state;
  }
});

/***/ })

};
//# sourceMappingURL=main.f3e8317a550591a6b093.hot-update.js.map