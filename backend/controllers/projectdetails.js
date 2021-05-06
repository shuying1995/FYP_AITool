const _ = require('lodash');
const { ObjectId } = require('mongodb');
const { Projectdetails, validate } = require('../models/projectdetails');
const mongoose = require('mongoose');
const { json } = require('body-parser');

exports.createProjectDetails = (req, res) => {
    // First Validate The Request
    const { error } = validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
    else
    projectdetails = new Projectdetails(_.pick(req.body, ['userid','projectid','stakeholder', 'fairnesscard', 'goright', 'gowrong']));
    projectdetails.save();
    res.status(200).send(projectdetails._id)
}

exports.getAllProjectDetails = function (req, res){
    Projectdetails.find((error, projectdetails)=> {
        if (error) {
            return next(error)
        } else {
            var inputArray = []
            for (var i = 0; i<projectdetails.length; i++){
                if(projectdetails[i].projectid == req.query.projectid)
                inputArray.push(projectdetails[i].toObject())
            }
            let totalLength = inputArray.length
            let index = inputArray.findIndex(x => x.userid == req.body.userid)
            let finalIndex = (index + 1) % totalLength
            let array = []
            array.push(inputArray[finalIndex])

            const result = {stakeholder:[], fairnesscard:[], goright: [], gowrong: []};
            for (const obj of array)
                for (const prop in result)
                obj[prop].forEach(function(item) {
                    result[prop] = result[prop].concat(item);
                })
            let size = result["stakeholder"].length;
            let output = [];
            for (let i = 0; i < size; i++) {
                let tempObj = {};
                for (const [key, value] of Object.entries(result)) {
                    tempObj[key] = value[i];
                }
                output.push(tempObj);
            }
            res.json(output)
        }
    })
}
