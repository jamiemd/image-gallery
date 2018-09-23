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
      // get all albums
      if (ctx.method === "GET" && ctx.path === "/api/getAlbums") {
        const albums = await AlbumModel.find({});
        ctx.body = {
          message: "status ok",
          albums
        }; // find album by id
      } else if (ctx.method === "GET" && ctx.path === "/api/findAlbum/:id") {
        let {
          id
        } = ctx.request.body;
        console.log("id", id);
        const albums = await AlbumModel.find({
          id: id
        }).exec();
        return next(); // create album
      } else if (ctx.method === "POST" && ctx.path === "/api/create-album") {
        await parseBody(ctx, () => Promise.resolve());
        let {
          name,
          images
        } = ctx.request.body; // console.log("name", name);
        // console.log("images", images);

        const newAlbum = new AlbumModel({
          name,
          images
        });
        const result = await newAlbum.save();
        console.log("result", result);
        ctx.body = {
          message: "status ok",
          result
        };
      }

      return next();
    };
  }

}));

/***/ })

};
//# sourceMappingURL=main.d54b5397143c646ddedc.hot-update.js.map