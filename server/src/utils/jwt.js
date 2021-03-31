const jwt = require('jsonwebtoken');

const secretKey = process.env.JWT_SECRET_KEY || 'iIsInR5cCI6IkpXVCJ9eyJhbGciOiJIUzI1N';

module.exports = {
  sign: (payload) => jwt.sign(payload, secretKey, { expiresIn: 86400 }),
  verify: (token) => jwt.verify(token, secretKey),
};
