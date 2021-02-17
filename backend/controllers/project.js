const _ = require('lodash');
const { ObjectId } = require('mongodb');
const { Project, validate } = require('../models/project');
const mongoose = require('mongoose');
const c = require('config');

exports.createProject = async (req, res) => {
    // First Validate The Request
    const { error } = validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
 
    // Check if this project already exisits
    let projectName = await Project.findOne({ name: req.body.name});
    if (projectName) {
        return res.status(500).send('Project name already taken!');
    } 
    else {
        // Insert the new project if the name is not taken yet
        project = new Project(_.pick(req.body, ['name', 'appscenario', 'apptype', 'invitedmembers','message','facilitator']));
        await project.save();
        res.status(200).send(project._id)
    }
};

exports.getPRProjects = function (req, res){
    Project.find((error, project) => {
        if (error) {
            return next(error)
        } 
        else {
            var array = []
            //project is array, need to loop through to find all invitedmembers columns
            for (var i=0; i<project.length; i++) {
            var members = project[i].invitedmembers
            //invitedmembers is array also, loop through to check if found
            for (var j=0; j<members.length; j++){
                if(members[j] == req.query.invitedmembers)
                    array.push(project[i])  
                }
            }
        }
        res.json(array)
    })
}

exports.getFProjects = function (req, res){
    Project.find((error, project) => {
        if (error) {
            return next(error)
        } 
        else {
            var array = []
            for(var i=0; i<project.length; i++){
                if(project[i].facilitator == req.query.facilitator)
                    array.push(project[i])
                }
            }
        res.json(array)
    })
}

exports.getOGProjects = function (req, res){
    Project.find((error, project) => {
        if (error) {
            return next(error)
        } 
        else {
            var array = []
                //project is array, need to loop through to find all acceptedmembers columns
                for (var i=0; i<project.length; i++) {
                var members = project[i].acceptedmembers
                //acceptedmembers is array also, loop through to check if found
                for (var j=0; j<members.length; j++){
                    if(members[j] == req.query.acceptedmembers)
                        array.push(project[i])  
                    }
                }
            }
        res.json(array)
    })
}


exports.getProjectDetails = function (req, res){
    Project.findById(req.params.projectid, (error, project)=> {
        if (error) {
            return next(error)
        } else {
            res.json(project)
        }
    })
}

exports.insertProjectSettings = function (req, res){
    Project.findById(req.params.projectid, (error,project)=> {
        if (error) {
            return next(error)
        } else {
            project.progress = req.body.progress;
            project.deadline = req.body.deadline;
            project.mincards = req.body.mincards;
            project.minreviews = req.body.minreviews;
        }
        project.save((error, updatedProject) => {
            //Wrong input
            if(error) 
                return res.status(400).end();
            return res.status(200).json(updatedProject);
        })
    })
}

exports.updateUserid = function (req, res){
    Project.findById(req.params.projectid, (error,project) =>{
        //projectid does not exist
        if (error) 
            return res.status(400).send("Project id not found");

         //if array is empty
         if(project.acceptedmembers.length == 0){
            project.acceptedmembers = req.body.userid;
        }
        //else add user id into existing array
        else { 
            project.acceptedmembers = project.acceptedmembers + "," + req.body.userid;
            project.acceptedmembers = project.acceptedmembers.toString().split(",")
        }
        let userid = project.invitedmembers
        const index = userid.indexOf(req.body.userid)
        if(index > -1){
            userid.splice(index, 1)
        }
        project.save((error, updatedProject) => {
            //Wrong input
            if(error) 
                return res.status(400).end();
            return res.status(200).json(updatedProject);
        })
    })
}

