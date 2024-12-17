const jwt = require('jsonwebtoken');
const SECRET_KEY = 'your_secret_key'; // Replace with an environment variable

const generateToken = (userId) => {
  return jwt.sign({ id: userId }, SECRET_KEY, { expiresIn: '1h' });
};

module.exports = { generateToken };
