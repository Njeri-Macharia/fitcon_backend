const userModel = require('../models/usermodel.js');
const jwt = require('jsonwebtoken');

// Controller to get all users
const Allusers = async (req, res) => {
  try {
    const users = await userModel.getAllUsers(); // Ensure this matches your model's function name
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by username
    const user = await userModel.verifyUser(email);

    // Check if user exists
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Verify password (assuming you're skipping bcrypt for simplicity here)
    const isPasswordValid = (password === user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid password" });
    }

    // Fetch the user's goals and enrolled classes
    const goals = await userModel.getUserGoals(user.id);
    const classes = await userModel.getUserClasses(user.id);

    // Generate JWT token
    const token = jwt.sign(
      { email: user.email, id: user.id },
      'your_jwt_secret', // Replace with your actual secret key
      { expiresIn: '1h' }
    );

    // Respond with token, user data, goals, and classes
    res.json({
      message: "Login successful",
      token: token,
      user: {
        email: user.email,
        id: user.id,
        goals: goals,
        classes: classes
      }
    });

  } catch (err) {
    res.status(500).json({ error: `Error during login: ${err.message}` });
  }
};

module.exports = {
  Allusers,
  loginUser,
};
