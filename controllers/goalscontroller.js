const goalsModel = require('../models/goalsmodel.js');

const Allgoals = async (req, res) => {
  try {
    const goals = await goalsModel.getAllgoals();
    res.json(goals);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};



module.exports = {
  Allgoals, 
 
};