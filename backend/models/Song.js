const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
  embedUrl: { type: String, required: true },
  delay: { type: Number, required: true },
}, { collection: 'Songs' });

module.exports = mongoose.model("Song", songSchema);
