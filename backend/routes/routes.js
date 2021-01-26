const express = require('express');
const router = express.Router();

var userController = require('../controllers/user')
var projectController = require('../controllers/project')


router.post('/users', userController.register) //create users
router.get('/users', userController.getAllUsers) //get all users
router.put('/users/:userId', userController.updateUsersProject) //Update a user with projectId

router.post('/login', userController.login) //users login route


router.post('/create', projectController.createProject) //create project

module.exports = router;