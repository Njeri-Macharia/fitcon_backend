const express = require('express');
const router = express.Router();
const goalscontroller = require('../controllers/goalscontroller');

router.get('/', goalscontroller.Allgoals);


module.exports = router;