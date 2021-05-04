const _ = require('lodash');
const { ObjectId } = require('mongodb');
const { Projectreviews, validate } = require('../models/projectreviews');
const mongoose = require('mongoose');
const { json } = require('body-parser');
const { isEqual } = require('lodash');

exports.createProjectReviews = (req, res) => {
    Projectreviews.find((error, projectreviews) => {
    if (error) {
        return next(error)
        }
    else {
    // Check if this there is any data in the projectreviews table
    if (projectreviews.length == 0) {
        projectreviews = new Projectreviews(_.pick(req.body, ['projectid','fairnesscard','rating','explainrating']))
        projectreviews.save();
    }
    else {
        var found = false
        for(var i=0; i<projectreviews.length; i++){
            if(projectreviews[i].fairnesscard == req.body.fairnesscard && projectreviews[i].projectid == req.body.projectid){
                projectreviews[i].rating = projectreviews[i].rating + ',' + req.body.rating
                projectreviews[i].explainrating = projectreviews[i].explainrating + ',' + req.body.explainrating
                projectreviews[i].save()
                found = true
                break
            }
        }
            if(!found){
                projectreviews = new Projectreviews(_.pick(req.body, ['projectid','fairnesscard','rating','explainrating']))
                projectreviews.save();
            }
    }
    }
    res.status(200).send(projectreviews)
})}

exports.getFairnesscardReviews = function (req, res){
    Projectreviews.find((error, projectreviews) => {
        var output = []
        if (error) {
            return next(error)
        } 
        else {
            var array = []
                //project is array, need to loop through to find all projectid columns
                for (var i=0; i<projectreviews.length; i++) {
                    if(projectreviews[i].projectid == req.body.projectid){
                        projectreviews[i] = projectreviews[i].toObject()
                        array.push(projectreviews[i])  
                    }
                    }
                    let reduceValue = array.reduce(function(result, tempObject) {
                        if (!result[tempObject.fairnesscard]) {
                            tempObject["count"] = 1
                            tempObject["rating"] = parseInt(tempObject["rating"])
                            result[tempObject["fairnesscard"]] = tempObject
                        } else {
                            let intermediate = result[tempObject["fairnesscard"]]
                            intermediate["rating"] += parseInt(tempObject["rating"])
                            intermediate["count"] += 1
                            result[tempObject["fairnesscard"]] = intermediate
                        }
                        return result
                    }, {})
                    let outputArray = Object.values(reduceValue)
                    
                    output = outputArray.map(obj => {
                        obj.rating = obj.rating / obj.count
                        delete obj["count"]
                        return obj
                    })
                    
                }
        res.json(output)
    }).select('-explainrating')
}

