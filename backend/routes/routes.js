const express = require('express');
const router = express.Router();

var userController = require('../controllers/user')
var projectController = require('../controllers/project')
var projectdetailsController = require('../controllers/projectdetails')

router.post('/login', userController.login) //users login route
router.post('/users', userController.register) //create users
router.post('/users/forget',userController.forgetPW) //send email to reset pw
router.get('/users', userController.getAllUsers) //get all users
router.put('/users/reset',userController.resetPW)
router.put('/users/:userid', userController.insertInvitedProjectId) //Insert inviteprojectid into user
router.put('/users/:userid/update', userController.insertAcceptedProjectId) //Insert acceptedprojectid and remove inviteprojectid from user


router.post('/create', projectController.createProject) //create project
router.get('/create/facilitator', projectController.getFProjects) //get projects by members/facilitator
router.get('/create/memberspr',projectController.getPRProjects) //get members pr projects
router.get('/create/membersog',projectController.getOGProjects) //get members og projects
router.get('/create/:projectid', projectController.getProjectDetails) //get selected projectdetails members accept
router.put('/create/:projectid', projectController.insertProjectSettings) //facilitator inserts projectsettings
router.put('/create/:projectid/update', projectController.updateUserid) //Remove userid from invitedmembers and insert into acceptedmembers

router.post('/projectdetails', projectdetailsController.createProjectDetails) //Create a collection to store member's project inputs

module.exports = router;