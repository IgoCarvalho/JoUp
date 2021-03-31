const { Router } = require('express');

const projectController = require('../controllers/projectController');

const authMiddleware = require('../middlewares/authMiddleware');

const projectRouter = Router();

projectRouter.use(authMiddleware);
projectRouter.post('/', projectController.create);
projectRouter.get('/', projectController.getAll);
projectRouter.get('/get/:projectId', projectController.getOne);
projectRouter.put('/update/:projectId', projectController.update);

// servicesRouter.

module.exports = projectRouter;
