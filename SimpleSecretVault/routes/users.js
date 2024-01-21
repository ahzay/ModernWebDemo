const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/check/:username', userController.checkUserExistence);
router.post('/create', userController.createUser);

module.exports = router;
