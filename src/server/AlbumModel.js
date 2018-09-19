const mongoose = require("mongoose");

const AlbumSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  images: {
    type: Array,
    required: true
  }
});

module.exports = mongoose.model("AlbumSchema", AlbumSchema);
