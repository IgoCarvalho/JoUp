const { Router } = require('express');

const usersRouter = require('./usersRoutes');
const servicesRouter = require('./servicesRoutes');
const solicitacoesRouter = require('./solicitacoesRouter');
const projectsRoutes = require('./projectsRoutes');

const appRouter = Router();

appRouter.use('/users', usersRouter);
appRouter.use('/services', servicesRouter);
appRouter.use('/solicitacoes', solicitacoesRouter);
appRouter.use('/projetos', projectsRoutes);

module.exports = appRouter;
