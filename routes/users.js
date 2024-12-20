const express = require('express');
const router = express.Router();
const userController = require('../controllers/userscontroller');

// Route to get all users
router.get('/all', userController.Allusers);

// Route to login user
router.post('/login', userController.loginUser);

module.exports = router;
