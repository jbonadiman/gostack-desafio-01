module.exports = {
  async store(req, res) {
    // salva um projeto
    const { title: taskTitle } = req.body;

    req.project.tasks.push(taskTitle);
    await req.project.save();

    return res.json(req.project);
  }
}