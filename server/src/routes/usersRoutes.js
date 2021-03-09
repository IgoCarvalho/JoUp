const { Router } = require('express');

const usersController = require('../controllers/usersController');
const authMiddleware = require('../middlewares/authMiddleware');

const usersRouter = Router();

usersRouter.post('/signup', usersController.signup);
usersRouter.post('/login', usersController.login);
usersRouter.use(authMiddleware);
usersRouter.put('/update-plan', usersController.updatePlan);

module.exports = usersRouter;
