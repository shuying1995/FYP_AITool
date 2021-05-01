const _ = require('lodash');
const { ObjectId } = require('mongodb');
const { Survey, validate } = require('../models/survey');
const mongoose = require('mongoose');
const { json } = require('body-parser');

exports.createSurvey = (req, res) => {
    // First Validate The Request
    const { error } = validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    else
    survey = new Survey(_.pick(req.body, ['userid','answerq1','answerq2','answerq3','answerq4','answerq5','answerq6',
    'answerq7','answerq8','answerq9','answerq10','answerq11','answerq12','answerq13','answerq14','answerq15',
    'answerq16','answerq17','answerq18','answerq19','answerq20','answerq21','answerq22','answerq23','answerq24',
    'answerq25','answerq26','answerq27','answerq28','answerq29','answerq30']));
    survey.save();
    res.status(200).send(survey._id)
}
