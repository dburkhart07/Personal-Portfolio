const mongoose = require("mongoose");

const experienceSchema = new mongoose.Schema({
  company: { type: String, required: true },
  dates: { type: String, required: true },
  description: { type: [String], required: true },
  delay: { type: Number, required: true },
}, { collection: 'Experience' });

module.exports = mongoose.model("Experience", experienceSchema);
