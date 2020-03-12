const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: String,
  tasks: [String],
  tag: String
});

module.exports = mongoose.model('Project', ProjectSchema);