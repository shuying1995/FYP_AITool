const mongoose = require('mongoose');
const Joi = require('joi');

const Project = mongoose.model('Project', new mongoose.Schema({
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
    invitedmembers:{
        type: Array,
        required: true
    },
    acceptedmembers: {
        type: Array
    },
    message: {
        type:String,
    },
    facilitator: {
        type: String,
        required: true
    },
    createdate: {
        type: String,
        default: Date
    }
}))

const validateProject = function (project) {
    const schema = Joi.object({
        name: Joi.string().required(),
        appscenario: Joi.string().required(),
        apptype: Joi.number().required(),
        invitedmembers: Joi.array().required(),
        acceptedmembers: Joi.array(),
        message: Joi.string().allow(''),
        facilitator: Joi.string().required(),
        createdate: Joi.string()
    });
    return schema.validate(project);
}

exports.Project = Project;
exports.validate = validateProject;