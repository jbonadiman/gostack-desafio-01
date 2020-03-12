const Project = require('../models/Project');

module.exports = {
  async index(req, res) {
    // lista todos os projetos
    const projects = await Project.find();
    return res.json(projects);
  },

  async store(req, res) {
    // salva um projeto
    const { tag, title } = req.body;

    let httpStatus = 304;
    let projectRecord = await Project.findOne({ tag });

    if (!projectRecord) {
      httpStatus = 201;
      projectRecord = await Project.create({
        tag,
        title,
        tasks: []
      });
    }

    return res.status(httpStatus).json(projectRecord);
  },

  async update(req, res) {
    // atualiza o título de um único projeto
    const { title: newTitle } = req.body;

    req.project.title = newTitle;
    await req.project.save();

    return res.status(200).json(req.project);
  },

  async destroy(req, res) {
    // deleta o projeto com base no id
    const { tag } = req.project;
    await Project.deleteOne({ tag });

    return res.status(200).end();
  }
}