const db = require('../config/db.js');
// const bcrypt = require('bcryptjs');

// Fetch all users
const getAllUsers = async () => {
    try {
        const [rows] = await db.query('SELECT * FROM users');
        return rows;
    } catch (error) {
        throw new Error('Error fetching users: ' + error.message);
    }
};

// Find a user by username
const getUserByUsername = async (email) => {
    try {
        const [rows] = await db.query('SELECT * FROM users WHERE email = ?', [email]);
        return rows[0]; // Return the first user found
    } catch (error) {
        throw new Error('Error finding user: ' + error.message);
    }
};

// Compare plaintext password with hashed password
const verifyUser = (user, password) => {
  return user.password === password; // Direct comparison
};

// get the user goals
const getUserGoals = async (userId) => {
  const [rows] = await db.query(
    `SELECT goals.goal_id, goals.goal_name, goals.description 
     FROM goals
     JOIN users  ON users.goal_id = goals.goal_id 
     WHERE users.user_id = ?`, [userId]
  );
  return rows; // Return the goals for the user
};


// get users classes
const getUserClasses = async (userId) => {
  const [rows] = await db.query(`
    SELECT classes.* 
    FROM classes
    JOIN bookings ON classes.class_id = bookings.class_id
    WHERE bookings.user_id = ?

  `, [userId]);
  return rows; // Return the classes the user is enrolled in
};

module.exports = {
    getAllUsers,
    getUserByUsername,
    verifyUser,
    getUserGoals,
    getUserClasses
};
