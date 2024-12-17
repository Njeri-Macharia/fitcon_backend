const userModel = require('../models/usermodel.js');
const { generateToken } = require('../config/jwt'); // Assuming JWT generation utility exists

// Controller to get all users
const Allusers = async (req, res) => {
  try {
    const users = await userModel.getAllUsers(); // Ensure this matches your model's function name
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Controller for user login
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Step 1: Find user by username
    const user = await userModel.getUserByUsername(email);
    if (!user) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    // Step 2: Verify password
    const isPasswordValid = await userModel.comparePassword(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    // Step 3: Generate a JWT Token
    const token = generateToken(user.id); // Assuming user ID is used in the token payload

    res.status(200).json({
      message: 'Login successful',
      token: token,
      user: { id: user.id, username: user.username }, // Optional: return user details
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  Allusers,
  loginUser,
};
