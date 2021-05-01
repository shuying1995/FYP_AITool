const mongoose = require('mongoose');
const Joi = require('joi');

const Survey = mongoose.model('Survey', new mongoose.Schema({
    userid:{
        type: String,
        required: true
    },
    answerq1:{
        type: String,
        required: true
    },
    answerq2:{
        type: String,
        required: true
    },
    answerq3:{
        type: String,
        required: true
    },
    answerq4:{
        type: String,
        required: true
    },
    answerq5:{
        type: String,
        required: true
    },
    answerq6:{
        type: String,
        required: true
    },
    answerq7:{
        type: String,
        required: true
    },
    answerq8:{
        type: String,
        required: true
    },
    answerq9:{
        type: String,
        required: true
    },
    answerq10:{
        type: String,
        required: true
    },
    answerq11:{
        type: String,
        required: true
    },
    answerq12:{
        type: String,
        required: true
    },
    answerq13:{
        type: String,
        required: true
    },
    answerq14:{
        type: String,
        required: true
    },
    answerq15:{
        type: String,
        required: true
    },
    answerq16:{
        type: String,
        required: true
    },
    answerq17:{
        type: String,
        required: true
    },
    answerq18:{
        type: String,
        required: true
    },
    answerq19:{
        type: String,
        required: true
    },
    answerq20:{
        type: String,
        required: true
    },
    answerq21:{
        type: String,
        required: true
    },
    answerq22:{
        type: String,
        required: true
    },
    answerq23:{
        type: String,
        required: true
    },
    answerq24:{
        type: String,
        required: true
    },
    answerq25:{
        type: String,
        required: true
    },
    answerq26:{
        type: String,
        required: true
    },
    answerq27:{
        type: String,
        required: true
    },
    answerq28:{
        type: String,
        required: true
    },
    answerq29:{
        type: String,
        required: true
    },
    answerq30:{
        type: String,
        required: true
    }
}))

const validateSurvey = function (survey) {
    const schema = Joi.object({
        userid: Joi.string().required(),
        answerq1: Joi.string().required(),
        answerq2: Joi.string().required(),
        answerq3: Joi.string().required(),
        answerq4: Joi.string().required(),
        answerq5: Joi.string().required(),
        answerq6: Joi.string().required(),
        answerq7: Joi.string().required(),
        answerq8: Joi.string().required(),
        answerq9: Joi.string().required(),
        answerq10: Joi.string().required(),
        answerq11: Joi.string().required(),
        answerq12: Joi.string().required(),
        answerq13: Joi.string().required(),
        answerq14: Joi.string().required(),
        answerq15: Joi.string().required(),
        answerq16: Joi.string().required(),
        answerq17: Joi.string().required(),
        answerq18: Joi.string().required(),
        answerq19: Joi.string().required(),
        answerq20: Joi.string().required(),
        answerq21: Joi.string().required(),
        answerq22: Joi.string().required(),
        answerq23: Joi.string().required(),
        answerq24: Joi.string().required(),
        answerq25: Joi.string().required(),
        answerq26: Joi.string().required(),
        answerq27: Joi.string().required(),
        answerq28: Joi.string().required(),
        answerq29: Joi.string().required(),
        answerq30: Joi.string().required(),
    })
    return schema.validate(survey);
}

exports.Survey = Survey;
exports.validate = validateSurvey;
