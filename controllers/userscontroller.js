const userModel = require('../models/usermodel.js');

const Allusers = async (req, res) => {
  try {
    const users = await userModel.getAllusers();
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



module.exports = {
  Allusers, 
 
};