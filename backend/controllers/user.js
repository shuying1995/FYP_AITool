const bcrypt = require('bcrypt');
const _ = require('lodash');
const { User, validate, validateLogin } = require('../models/user');
const jwt = require('jsonwebtoken');
const config = require('config');
const { first, result } = require('lodash');

exports.register = async (req, res) => {
    // First Validate The Request
    const { error } = validate(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
 
    // Check if this email already exisits
    let userEmail = await User.findOne({ email: req.body.email});
    if (userEmail) {
        return res.status(500).send('Email is already registered!');
    } 
    else {
        // Insert the new user if they do not exist yet
        user = new User(_.pick(req.body, ['firstname','lastname', 'email', 'password','roles']));
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        await user.save();
        const token = jwt.sign({ _id: user._id }, config.get('PrivateKey'));
        res.header('x-auth-token', token).send(_.pick(user, ['_id', 'email']));
    }
};

exports.login = async (req, res) => {
    // First Validate The HTTP Request
    const { error } = validateLogin(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
 
    //  Now find the user by their email
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
        return res.status(400).send('Incorrect email or password.');
    }
 
    // Then validate the Credentials in MongoDB match
    // those provided in the request
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
        return res.status(400).send('Incorrect email or password.');
    }
    const token = jwt.sign({ _id: user._id}, config.get('PrivateKey'));
    res.json({token, user})
};

exports.getAllUsers = function (req, res) {
    User.find((error, data) => {
        if (error) {
            return next(error)
        } else {
            res.json(data)
        }
    }).select("-password")
};

exports.insertInvitedProjectId = function (req, res) {
    User.findById(req.params.userid, (error, user)=> {
        //Userid does not exist
        if (error) 
            return res.status(400).send("User id not found");
        
        //split string into array (projectid)
        //if array is empty
        if(user.invitedprojectid == undefined){
            user.invitedprojectid = req.body.invitedprojectid;
        }
        //else add project id into existing array
        else { 
            var projectid = user.invitedprojectid;
            var result = projectid.split(",");
            //check that projectid will not exist twice in user
            for (var i=0; i<result.length; i++){
                if(result[i] == req.body.invitedprojectid)
                    return res.status(400).send("project id already added")
                else
                user.invitedprojectid = user.invitedprojectid + "," + req.body.invitedprojectid;
            }
        }
            user.save((error, updatedUser) => {
            //Wrong input
            if(error) 
                return res.status(400).end();
            return res.status(200).json(updatedUser);
        })
    }).select("-password")
}