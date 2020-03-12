const { Router } = require('express');
const prjController = require('./controllers/projectController');
const taskController = require('./controllers/taskController');
const tagChecker = require('./middlewares/projectMiddleware');

const routes = Router();

routes.get('/projects', prjController.index);
routes.post('/projects', prjController.store);
routes.put('/projects/:tag', tagChecker, prjController.update);
routes.delete('/projects/:tag', tagChecker, prjController.destroy);

routes.post('/projects/:tag/tasks', tagChecker, taskController.store);

module.exports = routes;