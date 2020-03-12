const Project = require('../models/Project');

const tagChecker = async (req, res, next) => {
  const { tag } = req.params;

  const project = await Project.findOne({ tag });
  if (project) {
    req.project = project;
    next();
  }
  else {
    res.status(404).send(`Project with tag ${tag} was not found!`);
  }
};

module.exports = tagChecker;