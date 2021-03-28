const mongoose = require('mongoose');
const Joi = require('joi');

const Projectreviews = mongoose.model('Projectreviews', new mongoose.Schema({
    projectid:{
        type: String,
        required: true
    },
    fairnesscard:{
        type: String,
        required: true
    },
    rating: {
        type: String
    },
    explainrating: {
        type: String
    }
}))

const validateProjectreviews = function (projectreviews) {
    const schema = Joi.object({
        projectid: Joi.string().required(),
        fairnesscard: Joi.string().required(),
        rating: Joi.array(),
        explainrating: Joi.array()
    })
    return schema.validate(projectreviews);
}

exports.Projectreviews = Projectreviews;
exports.validate = validateProjectreviews;