if(process.env.NODE_ENV && process.env.NODE_ENV !== 'development') {if ('development' === 'production') {throw new Error(`NODE_ENV (${process.env.NODE_ENV}) does not match value for compiled assets: development`);} else {console.warn('Overriding NODE_ENV: ' + process.env.NODE_ENV + ' to development in order to match value for compiled assets');process.env.NODE_ENV = 'development';}} else {process.env.NODE_ENV = 'development';}
require('/Users/jamie/GitHub/image-gallery/node_modules/source-map-support/source-map-support.js').install();
exports.id = "main";
exports.modules = {

/***/ "./src/actions/albums.js":
/*!*******************************!*\
  !*** ./src/actions/albums.js ***!
  \*******************************/
/*! exports provided: GET_ALBUMS, GET_ALBUM, CREATE_ALBUM, ADD_IMAGE, POPUP_TOGGLE, DELETE_ALBUM, DELETE_IMAGE, getAlbums, findAlbum, createAlbum, addImage, popupToggle, deleteAlbum, deleteImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALBUMS", function() { return GET_ALBUMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALBUM", function() { return GET_ALBUM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_ALBUM", function() { return CREATE_ALBUM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_IMAGE", function() { return ADD_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "POPUP_TOGGLE", function() { return POPUP_TOGGLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_ALBUM", function() { return DELETE_ALBUM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_IMAGE", function() { return DELETE_IMAGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAlbums", function() { return getAlbums; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findAlbum", function() { return findAlbum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAlbum", function() { return createAlbum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addImage", function() { return addImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "popupToggle", function() { return popupToggle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAlbum", function() { return deleteAlbum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteImage", function() { return deleteImage; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const GET_ALBUMS = "GET_ALBUMS";
const GET_ALBUM = "GET_ALBUM";
const CREATE_ALBUM = "CREATE_ALBUM";
const ADD_IMAGE = "ADD_IMAGE";
const POPUP_TOGGLE = "POPUP_TOGGLE";
const DELETE_ALBUM = "DELETE_ALBUM";
const DELETE_IMAGE = "DELETE_IMAGE";
const ROOT_URL = "http://localhost:3000/api"; // get all albums

const getAlbums = () => {
  return dispatch => {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(`${ROOT_URL}/getAlbums`).then(res => {
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

const popupToggle = imageId => {
  return {
    type: POPUP_TOGGLE,
    payload: imageId
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
  console.log("imageId in delete action", imageToDelete);
  return dispatch => {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.delete(`${ROOT_URL}/delete-image/${imageId}`).then(res => {
      disptach({
        type: DELETE_IMAGE,
        payload: res.data
      });
    }).catch(error => {
      console.log("error.response", error.response);
    });
  };
};

/***/ })

};
//# sourceMappingURL=main.c41a8399cfd4f5ba8483.hot-update.js.map