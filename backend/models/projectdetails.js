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
        type: Array,
        required: true
    },
    fairnesscard:{
        type: Array,
        required: true
    },
    goright:{
        type: Array,
        required: true
    },
    gowrong:{
        type: Array,
        required: true
    },
    createdate: {
        type: String,
        default: Date
    },
}))

const validateProjectdetails = function (projectdetails) {
    const schema = Joi.object({
        userid: Joi.string().required(),
        projectid: Joi.string().required(),
        stakeholder: Joi.array().required(),
        fairnesscard: Joi.array().required(),
        goright: Joi.array().required(),
        gowrong: Joi.array().required(),
        createdate: Joi.string(),
    })
    return schema.validate(projectdetails);
}

exports.Projectdetails = Projectdetails;
exports.validate = validateProjectdetails;