const ServiceModel = require('../models/Service');
const UserModel = require('../models/User');

module.exports = {
  async create(req, res) {
    const serviceData = req.body;
    const userId = req.auth;

    try {
      const newService = await ServiceModel.create({
        ...serviceData,
        user: userId,
      });

      await UserModel.findByIdAndUpdate(userId, {
        $push: { services: newService._id },
      });

      res.status(201).json(newService);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  },
  async getOne(req, res) {
    const { serviceId } = req.params;

    try {
      const service = await ServiceModel.findById(serviceId);

      res.json(service);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  },
  async update(req, res) {
    const { serviceId } = req.params;
    const serviceData = req.body;

    try {
      const updated = await ServiceModel.findByIdAndUpdate(
        serviceId,
        serviceData,
        { new: true }
      );

      res.json(updated);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  },
};
