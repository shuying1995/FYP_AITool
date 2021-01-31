const express = require('express');
const router = express.Router();

var userController = require('../controllers/user')
var projectController = require('../controllers/project')

router.post('/login', userController.login) //users login route
router.post('/users', userController.register) //create users
router.get('/users', userController.getAllUsers) //get all users
router.put('/users/:userid', userController.insertInvitedProjectId) //Insert inviteprojectid into user

router.post('/create', projectController.createProject) //create project
router.get('/create', projectController.getInvitedMemberProjects) //get all invitedprojects members have
router.get('/create/:projectid', projectController.getProjectDetails) //get selected projectdetails members accept
router.put('/create/:userid',projectController.insertProjectDetails) //Insert details into project by users

module.exports = router;