const express = require('express');
const router = express.Router();
const usercontroller = require('../controllers/userscontroller');

router.get('/', usercontroller.Allusers);


module.exports = router;