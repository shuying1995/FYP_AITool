const express = require('express');
const router = express.Router();

var userController = require('../controllers/user')
var projectController = require('../controllers/project')

router.post('/login', userController.login) //users login route
router.post('/users', userController.register) //create users
router.get('/users', userController.getAllUsers) //get all users
router.put('/users/:userId', userController.insertInvitedProjectId) //Insert inviteprojectid into user

router.post('/create', projectController.createProject) //create project
router.get('/create', projectController.getInvitedMemberProjects) //get all invitedprojects members have

module.exports = router;