if(process.env.NODE_ENV && process.env.NODE_ENV !== 'development') {if ('development' === 'production') {throw new Error(`NODE_ENV (${process.env.NODE_ENV}) does not match value for compiled assets: development`);} else {console.warn('Overriding NODE_ENV: ' + process.env.NODE_ENV + ' to development in order to match value for compiled assets');process.env.NODE_ENV = 'development';}} else {process.env.NODE_ENV = 'development';}
require('/Users/jamie/GitHub/image-gallery/node_modules/source-map-support/source-map-support.js').install();
exports.id = "main";
exports.modules = {

/***/ "./src/server/routes.js":
/*!******************************!*\
  !*** ./src/server/routes.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fusion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fusion-core */ "fusion-core");
/* harmony import */ var fusion_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fusion_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var koa_bodyparser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koa-bodyparser */ "koa-bodyparser");
/* harmony import */ var koa_bodyparser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(koa_bodyparser__WEBPACK_IMPORTED_MODULE_1__);
const AlbumModel = __webpack_require__(/*! ./AlbumModel */ "./src/server/AlbumModel.js");



/* harmony default export */ __webpack_exports__["default"] = (true &&
/*#__PURE__*/
Object(fusion_core__WEBPACK_IMPORTED_MODULE_0__["createPlugin"])({
  middleware() {
    const parseBody = koa_bodyparser__WEBPACK_IMPORTED_MODULE_1___default()();
    return async (ctx, next) => {
      if (ctx.method === "GET" && ctx.path === "/api/album") {
        const albums = await AlbumModel.find({}).exec();
        ctx.body = albums;
      } else if (ctx.method === "GET" && ctx.path === "/api/album/:id") {
        return next();
      } else if (ctx.method === "POST" && ctx.path === "/api/create-album") {
        await parseBody(ctx, () => Promise.resolve());
        ctx.body = ctx.request.body;
      }

      return next();
    };
  }

}));

/***/ })

};
//# sourceMappingURL=main.e61a407f3951e08d49dd.hot-update.js.map