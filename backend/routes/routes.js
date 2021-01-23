const express = require('express');
const router = express.Router();

var userController = require('../controllers/user')
var projectController = require('../controllers/project')

router.post('/register', userController.register)

//members login route
router.post('/login', userController.login)

//create project
router.post('/create', projectController.createproject)

module.exports = router;