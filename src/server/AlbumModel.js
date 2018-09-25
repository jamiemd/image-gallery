const mongoose = require("mongoose");

const connect = mongoose.connect(
  "mongodb://localhost/image-gallery",
  { useNewUrlParser: true }
);
mongoose.Promise = global.Promise;

const AlbumSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  images: [
    {
      file: {
        type: String
      },
      imagePreviewUrl: {
        type: String
      }
    }
  ]
});

module.exports = mongoose.model("AlbumSchema", AlbumSchema);
