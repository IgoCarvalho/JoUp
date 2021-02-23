const {Router} = require('express')

const usersRouter = require('./usersRoutes')

const appRouter = Router();

appRouter.use('/users', usersRouter)

module.exports = appRouter;