const _ = require('lodash');
const { ObjectId } = require('mongodb');
const { Projectreviews, validate } = require('../models/projectreviews');
const mongoose = require('mongoose');
const { json } = require('body-parser');

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