const express = require('express');
const router = express.Router();

const UsersController = require('./users.controller');

router.post('/signup', UsersController.createUser);
router.post('/login', UsersController.login);

module.exports = router;
