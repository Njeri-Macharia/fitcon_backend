const db = require('../config/db.js');


const getAllusers = async () => {
  const [rows] = await db.query('SELECT * FROM users');
  return rows;
};
 
const userId=
module.exports = { getAllusers };
