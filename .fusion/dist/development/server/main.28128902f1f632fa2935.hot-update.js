if(process.env.NODE_ENV && process.env.NODE_ENV !== 'development') {if ('development' === 'production') {throw new Error(`NODE_ENV (${process.env.NODE_ENV}) does not match value for compiled assets: development`);} else {console.warn('Overriding NODE_ENV: ' + process.env.NODE_ENV + ' to development in order to match value for compiled assets');process.env.NODE_ENV = 'development';}} else {process.env.NODE_ENV = 'development';}
require('/Users/jamie/GitHub/image-gallery/node_modules/source-map-support/source-map-support.js').install();
exports.id = "main";
exports.modules = {

/***/ "./src/server/AlbumModel.js":
/*!**********************************!*\
  !*** ./src/server/AlbumModel.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

const mongoose = __webpack_require__(/*! mongoose */ "mongoose");

const connect = mongoose.connect("mongodb://localhost/image-gallery", {
  useNewUrlParser: true
});
mongoose.Promise = global.Promise;
const AlbumSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  images: [{
    type: String
  }]
});
module.exports = mongoose.model("AlbumSchema", AlbumSchema);

/***/ })

};
//# sourceMappingURL=main.28128902f1f632fa2935.hot-update.js.map