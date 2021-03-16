const jwt = require('../utils/jwt');

module.exports = async (req, res, next) => {
  try {
    const [, token] = req.headers.authorization.split(' ');
    console.log(req.headers.authorization);
    const payload = jwt.verify(token);

    req.auth = payload.user;

    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({ error });
  }
};
