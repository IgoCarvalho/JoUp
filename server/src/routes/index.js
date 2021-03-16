const { Router } = require('express');

const usersRouter = require('./usersRoutes');
const servicesRouter = require('./servicesRoutes');

const appRouter = Router();

appRouter.use('/users', usersRouter);
appRouter.use('/services', servicesRouter);

module.exports = appRouter;
