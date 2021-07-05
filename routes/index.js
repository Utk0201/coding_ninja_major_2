const express = require('express');
const router = express.Router();

const homeController=require('../controllers/home_controller');

router.use('/user',require('./user'));
// router.get('/profile',homeController.profile);
router.get('/home',homeController.home);

module.exports = router;