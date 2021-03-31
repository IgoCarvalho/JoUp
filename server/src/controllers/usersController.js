const { hash, compare } = require('bcrypt');
const slugify = require('slugify');

const omitKeys = require('../utils/omitKeys');
const plans = require('../utils/plans');
const jwt = require('../utils/jwt');
const socialMediaService = require('../services/socialMediaService');

const userModel = require('../models/User');

module.exports = {
  async signup(req, res) {
    const { username, email, password } = req.body;

    try {
      const avatarName = String(username).trim().replace(' ', '+');
      const avatar_url = `https://ui-avatars.com/api/?background=7F529A&color=fff&name=${avatarName}`;

      const hashedPassword = await hash(password, 10);

      const newUser = await userModel.create({
        username,
        email,
        password: hashedPassword,
        avatar_url,
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
        user: plans.populate(omitKeys(user, 'password')),
        token,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error });
    }
  },
  async updatePlan(req, res) {
    const id = req.auth;
    const { plan, ...creditCard } = req.body;
    try {
      const newDate = new Date();

      const updated = await userModel.findByIdAndUpdate(
        id,
        {
          $set: {
            'plan.key': plan,
            'plan.signatureDate': newDate,
            creditCard,
          },
        },
        { new: true }
      );

      res.json({ user: plans.populate(omitKeys(updated, 'password')) });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error });
    }
  },
  async getByUsername(req, res) {
    const { username } = req.params;

    try {
      const user = await userModel
        .findOne({ username: username })
        .populate('services');

      res.json(user);
    } catch (error) {}
  },
  async silentLogin(req, res) {
    const id = req.auth;

    try {
      const user = await userModel.findById(id);

      res.json({ user: plans.populate(omitKeys(user, 'password')) });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error });
    }
  },
  async getSocialMeialData(req, res) {
    const id = req.auth;
    const { username, socialMedia } = req.body;

    try {
      const data = await socialMediaService[socialMedia](username);

      if (!data) {
        throw new Error();
      }
      const user = await userModel.findById(id);

      user.socialMediaData[socialMedia] = { username, data };

      await user.save();

      res.json({ user: plans.populate(omitKeys(user, 'password')) });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error });
    }
  },
};
