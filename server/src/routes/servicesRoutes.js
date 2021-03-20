const { Router } = require('express');

const servicesController = require('../controllers/servicesController');

const authMiddleware = require('../middlewares/authMiddleware');

const servicesRouter = Router();

servicesRouter.use(authMiddleware);
servicesRouter.post('/', servicesController.create);
servicesRouter.get('/', servicesController.getAll);
servicesRouter.get('/get/:serviceId', servicesController.getOne);
servicesRouter.put('/update/:serviceId', servicesController.update);

// servicesRouter.

module.exports = servicesRouter;
