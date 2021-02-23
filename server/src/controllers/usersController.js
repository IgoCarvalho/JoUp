const mongoose = require('mongoose');

require('../models/User');
const userModel = mongoose.model('User');

module.exports = {
  async save(req, res) {
    const { name, username, email, password, phone } = req.body;

    try {
      const user = await userModel.create({
        name,
        username,
        email,
        password,
        phone,
      });

      res.status(201).json({user})
      
    } catch (error) {
      console.log(error);
      res.status(500).json({message: 'Internal server error!'})
    }
  },
};
