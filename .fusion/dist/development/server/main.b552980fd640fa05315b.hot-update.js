if(process.env.NODE_ENV && process.env.NODE_ENV !== 'development') {if ('development' === 'production') {throw new Error(`NODE_ENV (${process.env.NODE_ENV}) does not match value for compiled assets: development`);} else {console.warn('Overriding NODE_ENV: ' + process.env.NODE_ENV + ' to development in order to match value for compiled assets');process.env.NODE_ENV = 'development';}} else {process.env.NODE_ENV = 'development';}
require('/Users/jamie/GitHub/image-gallery/node_modules/source-map-support/source-map-support.js').install();
exports.id = "main";
exports.modules = {

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
  // console.log("action", action);
  console.log("state", state);

  switch (action.type) {
    case _actions_albums__WEBPACK_IMPORTED_MODULE_0__["GET_ALBUMS"]:
      return _objectSpread({}, state, action.payload);

    case _actions_albums__WEBPACK_IMPORTED_MODULE_0__["GET_ALBUM"]:
      return _objectSpread({}, action.payload);

    case _actions_albums__WEBPACK_IMPORTED_MODULE_0__["CREATE_ALBUM"]:
      return _objectSpread({}, action.payload);

    case _actions_albums__WEBPACK_IMPORTED_MODULE_0__["ADD_IMAGE"]:
      return _objectSpread({}, state, action.payload);

    case _actions_albums__WEBPACK_IMPORTED_MODULE_0__["POPUP_TOGGLE"]:
      if (state.togglePopup == true) {
        return _objectSpread({}, state, {
          togglePopup: false
        });
      } else {
        return _objectSpread({}, state, {
          togglePopup: true
        });
      }

    case _actions_albums__WEBPACK_IMPORTED_MODULE_0__["ADD_IMAGE"]:
      return _objectSpread({}, state, action.payload);

    case _actions_albums__WEBPACK_IMPORTED_MODULE_0__["ADD_IMAGE"]:
      return _objectSpread({}, state, action.payload);

    default:
      return state;
  }
});

/***/ })

};
//# sourceMappingURL=main.b552980fd640fa05315b.hot-update.js.map