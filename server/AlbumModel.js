const mongoose = require("mongoose");

const AlbumSchema = new mongoose.Schema({
  Album: [{ data: Buffer, required: true }]
});

module.exports = mongoose.model("AlbumSchema", AlbumSchema);
