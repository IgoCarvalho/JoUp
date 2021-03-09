const { hash, compare } = require('bcrypt');
const omitKeys = require('../utils/omitKeys');
const jwt = require('../utils/jwt');

const userModel = require('../models/User');

module.exports = {
  async signup(req, res) {
    const { name, username, email, password } = req.body;

    try {
      const hashedPassword = await hash(password, 10);

      const newUser = await userModel.create({
        name,
        username,
        email,
        password: hashedPassword,
      });

      const token = jwt.sign({ user: newUser._id });
      const user = omitKeys(newUser, 'password');

      res.status(201).json({
        user,
        token,
      });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error });
    }
  },
  async login(req, res) {
    const { credential, password } = req.body;

    try {
      const user = await userModel.findOne({
        $or: [{ email: credential }, { username: credential }],
      });

      if (!user) {
        return res.status(404).json({ message: 'Email ou senha incorretos.' });
      }

      const isValidPassword = await compare(password, user.password);

      if (!isValidPassword) {
        return res.status(404).json({ message: 'Email ou senha incorretos.' });
      }

      const token = jwt.sign({ user: user._id });

      res.json({
        user: omitKeys(user, 'password'),
        token,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error });
    }
  },
  async updatePlan(req, res) {
    const id = req.auth;
    const { plan } = req.body;
    try {
      const newDate = new Date();

      const updated = await userModel.findByIdAndUpdate(
        id,
        {
          $set: { 'plan.key': plan, 'plan.signatureDate': newDate },
        },
        { new: true }
      );

      res.json({ user: omitKeys(updated, 'password') });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error });
    }
  },
  //TODO => get user by username > user and services
};
