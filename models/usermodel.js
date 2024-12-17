const db = require('../config/db.js');
const bcrypt = require('bcryptjs');

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
const comparePassword = async (inputPassword, hashedPassword) => {
    try {
        return await bcrypt.compare(inputPassword, hashedPassword);
    } catch (error) {
        throw new Error('Error verifying password: ' + error.message);
    }
};

module.exports = {
    getAllUsers,
    getUserByUsername,
    comparePassword,
};
