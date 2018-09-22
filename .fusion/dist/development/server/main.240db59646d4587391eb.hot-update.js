if(process.env.NODE_ENV && process.env.NODE_ENV !== 'development') {if ('development' === 'production') {throw new Error(`NODE_ENV (${process.env.NODE_ENV}) does not match value for compiled assets: development`);} else {console.warn('Overriding NODE_ENV: ' + process.env.NODE_ENV + ' to development in order to match value for compiled assets');process.env.NODE_ENV = 'development';}} else {process.env.NODE_ENV = 'development';}
require('/Users/jamie/GitHub/image-gallery/node_modules/source-map-support/source-map-support.js').install();
exports.id = "main";
exports.modules = {

/***/ "./src/actions/albums.js":
/*!*******************************!*\
  !*** ./src/actions/albums.js ***!
  \*******************************/
/*! exports provided: GET_ALBUMS, CREATE_ALBUM_NAME, CREATE_ALBUM, getAlbums, createAlbumName, createAlbum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_ALBUMS", function() { return GET_ALBUMS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_ALBUM_NAME", function() { return CREATE_ALBUM_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_ALBUM", function() { return CREATE_ALBUM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAlbums", function() { return getAlbums; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAlbumName", function() { return createAlbumName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAlbum", function() { return createAlbum; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const GET_ALBUMS = "GET_ALBUMS";
const CREATE_ALBUM_NAME = "CREATE_ALBUM_NAME";
const CREATE_ALBUM = "CREATE_ALBUM";
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
}; // add album name to pass into create-album page

const createAlbumName = albumName => {
  return {
    type: CREATE_ALBUM_NAME,
    payload: albumName
  };
}; // create album

const createAlbum = (name, images) => {
  console.log("name", name);
  const imagesArray = [];
  imagesArray.push({
    file: images.file.name,
    imagePreviewUrl: images.imagePreviewUrl
  });
  console.log("imagesArray", imagesArray);
  return dispatch => {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.post(`${ROOT_URL}/create-album`, {
      name
    }, imagesArray).then(res => {
      console.log("res", res);
      dispatch({
        type: CREATE_ALBUM,
        payload: res.data
      });
    }).catch(error => {
      console.log("error.response", error.response);
    });
  };
};

/***/ })

};
//# sourceMappingURL=main.240db59646d4587391eb.hot-update.js.map