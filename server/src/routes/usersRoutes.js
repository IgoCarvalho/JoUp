const {Router} = require('express')

const usersController = require('../controllers/usersController')

const usersRouter = Router();

usersRouter.get('/', (req, res) => {
  res.send('dcdc')
})

usersRouter.post('/', usersController.save)

module.exports = usersRouter;