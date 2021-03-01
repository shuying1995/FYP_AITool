const mongoose = require('mongoose');
const Joi = require('joi');
const { string } = require('joi');
const passwordComplexity = require("joi-password-complexity").default;
 
const User = mongoose.model('User', new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        maxlength: 255,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    roles: {
        type: String,
        required: true
    },
    invitedprojectid: {
        type: String
    },
    acceptedprojectid: {
        type: String
    },
    inputtedprojectid: {
        type: String
    },
    resetPasswordToken: {
        type: String
    },
    resetPasswordExpires: {
        type: Date
    }
}));

const complexityOptions = {
    min: 8,
    max: 50,
    lowercase: 1,
    uppercase: 1,
    numeric: 1,
    symbol: 1
    }

const validateUser = function (user) {
    const schema = Joi.object({
        firstname: Joi.string().required(),
        lastname: Joi.string().required(),
        email: Joi.string().max(255).required().email(),
        password: passwordComplexity(complexityOptions).required(),
        roles: Joi.string().required(),
        invitedprojectid: Joi.string(),
        acceptedprojectid: Joi.string(),
        inputtedprojectid: Joi.string()
    });
    return schema.validate(user);
}

const validateLogin = function (user) {
    const schema = Joi.object({
        email: Joi.string().max(255).required().email(),
        password: passwordComplexity(complexityOptions).required(),
    });
    return schema.validate(user);
}

exports.User = User;
exports.validate = validateUser;
exports.validateLogin = validateLogin;