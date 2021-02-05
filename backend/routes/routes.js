const express = require('express');
const router = express.Router();

var userController = require('../controllers/user')
var projectController = require('../controllers/project')
var projectdetailsController = require('../controllers/projectdetails')

router.post('/login', userController.login) //users login route
router.post('/users', userController.register) //create users
router.get('/users', userController.getAllUsers) //get all users
router.put('/users/:userid', userController.insertInvitedProjectId) //Insert inviteprojectid into user
router.put('/users/:userid/update', userController.insertAcceptedProjectId) //Insert acceptedprojectid and remove inviteprojectid from user

router.post('/create', projectController.createProject) //create project
router.get('/create', projectController.getProjects) //get all invitedprojects members have
router.get('/create/:projectid', projectController.getProjectDetails) //get selected projectdetails members accept
router.put('/create/:projectid', projectController.insertProjectSettings) //facilitator inserts projectsettings

router.post('/projectdetails', projectdetailsController.createProjectDetails) //Create a collection to store member's project inputs

module.exports = router;