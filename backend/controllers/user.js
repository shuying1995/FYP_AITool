const bcrypt = require('bcrypt');
require('dotenv').config()
const _ = require('lodash');
const { User, validate, validateLogin } = require('../models/user');
const jwt = require('jsonwebtoken');
const config = require('config');
const { first, result } = require('lodash');
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

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
        //userid does not exist
        if (error) 
            return res.status(400).send("User id not found");
        
        //if array is empty
        if(user.invitedprojectid == undefined){
            user.invitedprojectid = req.body.invitedprojectid;
        }
        //else add project id into existing array
        else { 
            var projectid = user.invitedprojectid;
            //split string into array (projectid)
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

exports.insertAcceptedProjectId = function (req, res) {
    User.findById(req.params.userid, (error, user)=> {
        //userid does not exist
        if (error) 
            return res.status(400).send("User id not found");
         //if array is empty
         if(user.acceptedprojectid == undefined){
            user.acceptedprojectid = req.body.invitedprojectid;
        }
        //else add project id into existing array
        else { 
            user.acceptedprojectid = user.acceptedprojectid + "," + req.body.invitedprojectid;
        }
        let projectid = user.invitedprojectid
        //split string into array (projectid)
        var array = projectid.split(",");
        const index = array.indexOf(req.body.invitedprojectid)
        if(index > -1){
            array.splice(index, 1)
        }
        user.invitedprojectid = array.toString()
        user.save((error, updatedUser) => {
            //Wrong input
            if(error) 
                return res.status(400).end();
            return res.status(200).json(updatedUser);
        })
    })
}

exports.forgetPW = function (req, res) {
    const msg = {
        to: req.body.email, // Change to your recipient
        from: 'suppfyp@mail.com', // Change to your verified sender
        subject: 'Password reset',
        text: 'Go to this link to reset password http://localhost:8080/resetpw',
      }    
      
      sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent')
        return res.status(200).end();
      })
      .catch((error) => {
        console.error(error)
      })
}

exports.resetPW = function (req, res){
    User.find((error, user) => {
        if (error) {
            return next(error)
        } 
        else {
            //email is an array, loop through to find if specific email is equal req.body.email
            for(var i=0; i<user.length;i++){
            if(user[i].email == req.body.email){
                user[i].password = req.body.password
                const salt = bcrypt.genSaltSync(10);
                user[i].password = bcrypt.hashSync(user[i].password, salt);
                user[i].save()
                return res.status(200).send("Password reset")
            }
            else
                return res.status(404).send("Account with this email does not exist")
        }
        }
    })
}