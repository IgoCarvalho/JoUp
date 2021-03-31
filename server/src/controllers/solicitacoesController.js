const ServiceModel = require('../models/Service');
const SolicitacaoModel = require('../models/Solicitacao');

module.exports = {
  async create(req, res) {
    const solicitacaoData = req.body;

    try {
      const data_inicio = new Date();
      const data_prazo = new Date();
      data_prazo.setDate(data_inicio.getDate() + 3);

      const newSolicitacao = await SolicitacaoModel.create({
        ...solicitacaoData,
        solicitado: {
          inicio: data_inicio,
          prazo: data_prazo,
        },
      });

      res.status(201).json({ solicitacao: newSolicitacao });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  },
  async getAll(req, res) {
    const id = req.auth;

    try {
      const solicitacoes = await SolicitacaoModel.find({ user: id }).populate(
        'service'
      );

      res.json({ solicitacoes });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  },
  async getOne(req, res) {
    const { solicitacaoId } = req.params;

    try {
      const solicitacao = await SolicitacaoModel.findById(
        solicitacaoId
      ).populate('service');

      res.json({ solicitacao });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  },
  async updateStatus(req, res) {
    const { solicitacaoId } = req.params;
    const { status } = req.body;

    try {
      const solicitacao = await SolicitacaoModel.findByIdAndUpdate(
        solicitacaoId,
        { $set: { aceito: status } },
        { new: true }
      );

      res.json({ solicitacao });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  },
};
