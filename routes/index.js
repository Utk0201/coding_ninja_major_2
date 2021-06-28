const express = require('express');
const router = express.Router();

router.use('/profile',require('../controllers/home_controller').profile);
router.use('/',require('../controllers/home_controller').home);

module.exports = router;