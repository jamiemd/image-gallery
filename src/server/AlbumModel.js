const mongoose = require("mongoose");

const connect = mongoose.connect(
  "mongodb://localhost/image-gallery",
  { useNewUrlParser: true }
);
mongoose.Promise = global.Promise;

const AlbumSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  images: [
    {
      file: {
        type: String,
        required: true
      },
      imagePreviewUrl: {
        type: String,
        required: true
      }
    }
  ]
});

module.exports = mongoose.model("AlbumSchema", AlbumSchema);
