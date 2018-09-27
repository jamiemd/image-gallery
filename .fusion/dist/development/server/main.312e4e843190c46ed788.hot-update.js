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
      style: popUpContainer
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "Delete this image?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: this.handleToggle
    }, "Cancel"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      onClick: () => this.handleDelete(this.props.imageToDelete)
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
  console.log("state in popup", state);
  return {
    imageToDelete: state.imageToDelete
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  showDeletePopup: _actions_albums__WEBPACK_IMPORTED_MODULE_2__["showDeletePopup"],
  deleteImage: _actions_albums__WEBPACK_IMPORTED_MODULE_2__["deleteImage"]
})(Popup));

/***/ }),

/***/ "./src/actions/albums.js":
/*!*******************************!*\
  !*** ./src/actions/albums.js ***!
  \*******************************/
/*! exports provided: GET_ALBUMS, GET_ALBUM, CREATE_ALBUM, ADD_IMAGE, SHOW_DELETE_POPUP, SHOW_IMAGE_POPUP, DELETE_ALBUM, DELETE_IMAGE, getAlbums, findAlbum, createAlbum, addImage, showDeletePopup, showImagePopup, deleteAlbum, deleteImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALBUMS", function() { return GET_ALBUMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALBUM", function() { return GET_ALBUM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_ALBUM", function() { return CREATE_ALBUM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_IMAGE", function() { return ADD_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_DELETE_POPUP", function() { return SHOW_DELETE_POPUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHOW_IMAGE_POPUP", function() { return SHOW_IMAGE_POPUP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_ALBUM", function() { return DELETE_ALBUM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_IMAGE", function() { return DELETE_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAlbums", function() { return getAlbums; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findAlbum", function() { return findAlbum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAlbum", function() { return createAlbum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addImage", function() { return addImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showDeletePopup", function() { return showDeletePopup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showImagePopup", function() { return showImagePopup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAlbum", function() { return deleteAlbum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteImage", function() { return deleteImage; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const GET_ALBUMS = "GET_ALBUMS";
const GET_ALBUM = "GET_ALBUM";
const CREATE_ALBUM = "CREATE_ALBUM";
const ADD_IMAGE = "ADD_IMAGE";
const SHOW_DELETE_POPUP = "SHOW_DELETE_POPUP";
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
      console.log("res in create album", res);
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
}; // popup

const showDeletePopup = imageId => {
  return {
    type: SHOW_DELETE_POPUP,
    payload: imageId
  };
};
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
const deleteImage = imageToDelete => {
  return dispatch => {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`${ROOT_URL}/delete-image`, {
      imageToDelete
    }).then(res => {
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
/* harmony import */ var _Components_pop_up__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/pop-up */ "./src/Components/pop-up.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








class Album extends react__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor(props) {
    super(props);

    _defineProperty(this, "handleDeleteClick", imageToDelete => {
      this.props.showDeletePopup(imageToDelete);
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
    }, this.props.album.images.map((image, i) => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      key: i
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
      style: removeImage,
      onClick: () => this.handleDeleteClick(image._id)
    }, "x"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
const removeImage = {};

const mapStateToProps = state => {
  console.log("state in album", state);
  return {
    album: state.album || {
      images: []
    },
    showDeletePopup: state.showDeletePopup
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_2__["connect"])(mapStateToProps, {
  findAlbum: _actions_albums__WEBPACK_IMPORTED_MODULE_1__["findAlbum"],
  showDeletePopup: _actions_albums__WEBPACK_IMPORTED_MODULE_1__["showDeletePopup"],
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
  console.log("action.payload", action.payload);

  switch (action.type) {
    case _actions_albums__WEBPACK_IMPORTED_MODULE_0__["GET_ALBUMS"]:
      return _objectSpread({}, state, {
        albums: action.payload.albums
      });

    case _actions_albums__WEBPACK_IMPORTED_MODULE_0__["GET_ALBUM"]:
      return _objectSpread({}, action.payload);

    case _actions_albums__WEBPACK_IMPORTED_MODULE_0__["CREATE_ALBUM"]:
      return _objectSpread({}, action.payload);

    case _actions_albums__WEBPACK_IMPORTED_MODULE_0__["ADD_IMAGE"]:
      return _objectSpread({}, state, action.payload);

    case _actions_albums__WEBPACK_IMPORTED_MODULE_0__["SHOW_DELETE_POPUP"]:
      if (state.showDeletePopup == true) {
        return _objectSpread({}, state, {
          showDeletePopup: false
        });
      } else {
        return _objectSpread({}, state, {
          togglePopup: true,
          imageToDelete: action.payload
        });
      }

    case _actions_albums__WEBPACK_IMPORTED_MODULE_0__["SHOW_IMAGE_POPUP"]:
      return _objectSpread({}, action.payload);

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
//# sourceMappingURL=main.312e4e843190c46ed788.hot-update.js.map