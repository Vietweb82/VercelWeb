const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user.controller');

// GET /api/users
router.get('/', UserController.getAllUsers);

// POST /api/users
router.post('/', UserController.createUser);

module.exports = router;
