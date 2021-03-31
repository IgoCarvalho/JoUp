const { Router } = require('express');

const solicitacoesController = require('../controllers/solicitacoesController');

const authMiddleware = require('../middlewares/authMiddleware');

const solicitacoesRouter = Router();

solicitacoesRouter.post('/', solicitacoesController.create);
solicitacoesRouter.use(authMiddleware);
solicitacoesRouter.get('/', solicitacoesController.getAll);
solicitacoesRouter.get('/get/:solicitacaoId', solicitacoesController.getOne);
solicitacoesRouter.put('/update-status/:solicitacaoId', solicitacoesController.updateStatus);

// servicesRouter.

module.exports = solicitacoesRouter;
