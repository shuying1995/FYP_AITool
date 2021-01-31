const mongoose = require('mongoose');
const Joi = require('joi');

const Projectdetails = mongoose.model('Projectdetails', new mongoose.Schema({
    userid:{
        type: String,
        required: true
    },
    projectid: {
        type: String,
        required: true
    },
    stakeholder:{
        type: String,
        required: true
    },
    fairnesscard:{
        type: String,
        required: true
    },
    goright:{
        type: String,
        required: true
    },
    gowrong:{
        type: String,
        required: true
    },
    createdate: {
        type: String,
        default: Date
    }
}))

const validateProjectdetails = function (projectdetails) {
    const schema = Joi.object({
        userid: Joi.string().required(),
        projectid: Joi.string().required(),
        stakeholder: Joi.string().required(),
        fairnesscard: Joi.string().required(),
        goright: Joi.string().required(),
        gowrong: Joi.string().required(),
        createdate: Joi.string()
    })
    return schema.validate(projectdetails);
}

exports.Projectdetails = Projectdetails;
exports.validate = validateProjectdetails;