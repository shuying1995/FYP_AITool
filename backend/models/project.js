const mongoose = require('mongoose');
const Joi = require('joi');
const { date } = require('joi');
const moment = require('moment');

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
    inputtedmembers: {
        type: Array
    },
    message: {
        type:String,
        default: "No Message"
    },
    facilitator: {
        type: String,
        required: true
    },
    progress: {
        type: Number
    },
    deadline: {
        type: String
    },
    mincards: {
        type: Number,
        default: '1'
    },
    minreviews:{
        type: Number
    },
    createdate: {
        type: String,
        default: () => moment().format("YYYY-MM-DD")
    }
}))

const validateProject = function (project) {
    const schema = Joi.object({
        name: Joi.string().required(),
        appscenario: Joi.string().required(),
        apptype: Joi.number().required(),
        invitedmembers: Joi.array().required(),
        acceptedmembers: Joi.array(),
        inputtedmembers: Joi.array(),
        message: Joi.string().allow(''),
        facilitator: Joi.string().required(),
        progress: Joi.number(),
        deadline: Joi.string(),
        mincards: Joi.number(),
        minreviews: Joi.number(),
        createdate: Joi.string()
    });
    return schema.validate(project);
}

exports.Project = Project;
exports.validate = validateProject;