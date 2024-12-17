const db = require('../config/db.js');


const getAllgoals = async () => {
  const [rows] = await db.query('SELECT * FROM goals');
  return rows;
};

// const getagoal = async () => {
//   const [rows] = await db.query('SELECT * FROM goals');
//   return rows;
// };
module.exports = { getAllgoals };
