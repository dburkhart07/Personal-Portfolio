const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  image: { type: String, required: true },
  techStack: { type: [String], required: true },
  projectLink: { type: String, required: true},
  delay: { type: Number, required: true },
}, { collection: 'Projects' });

module.exports = mongoose.model("Project", projectSchema);
