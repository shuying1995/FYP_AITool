const _ = require('lodash');
const { ObjectId } = require('mongodb');
const { Project, validate } = require('../models/project');
const mongoose = require('mongoose')

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

exports.getInvitedMemberProjects = function (req, res){
    Project.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            var array = []
            //data is array, need to loop through to find all invitedmembers columns
            for (var i=0; i<data.length; i++) {
                var members = data[i].invitedmembers
                //invitedmembers is array also, loop through to check if found
                for (var j=0; j<members.length; j++){
                    if(members[j] == req.query.invitedmembers)
                        array.push(data[i])  
                }
            }
            res.json(array)
        }
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
