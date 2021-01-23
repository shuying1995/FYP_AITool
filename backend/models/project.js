const mongoose = require('mongoose');
const Joi = require('joi');

const Project = mongoose.model('Project', new mongoose.Schema({
    projectid:{
        type: Number
    },
    name:{
        type: String,
        required: true,
        unique: true
    },
    appscenario:{
        type: String,
        required: true
    },
    apptype:{
        type: Number,
        required: true
    },
    members:{
        type: Array,
        required: true
    },
    message: {
        type:String,
    }
}))

const validateProject = function (project) {
    const schema = Joi.object({
        projectid: Joi.number(),
        name: Joi.string().required(),
        appscenario: Joi.string().required(),
        apptype: Joi.number().required(),
        members: Joi.array().required(),
        message: Joi.string().allow('')
    });
    return schema.validate(project);
}

exports.Project = Project;
exports.validate = validateProject;