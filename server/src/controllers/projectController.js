const ProjectModel = require('../models/Project');
const SolicitacaoModel = require('../models/Solicitacao');

module.exports = {
  async create(req, res) {
    const user = req.auth;

    const projectData = req.body;

    // console.log(projectData);

    try {
      const solicitacaoId = projectData.solicitacao;

      const project = await ProjectModel.create({
        user,
        ...projectData,
      });

      await SolicitacaoModel.findByIdAndUpdate(solicitacaoId, {
        $set: { aceito: true },
      });

      res.status(201).json({ project });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  },
  async getAll(req, res) {
    const id = req.auth;

    try {
      const projects = await ProjectModel.find({ user: id }).populate(
        'service'
      );

      // console.log('bateu', projects);
      res.json({ projects });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  },
  async getOne(req, res) {
    const { projectId } = req.params;

    try {
      const project = await ProjectModel.findById(projectId)
        .populate('service')
        .populate('solicitacao');

      res.json({ project });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  },
  async update(req, res) {
    const { projectId } = req.params;
    const projectData = req.body;

    try {
      const project = await ProjectModel.findByIdAndUpdate(
        projectId,
        projectData,
        { new: true }
      );

      res.json({ project });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  },
};
