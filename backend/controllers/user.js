const bcrypt = require('bcrypt');
const _ = require('lodash');
const { User, validate, validateLogin } = require('../models/user');
const jwt = require('jsonwebtoken');
const config = require('config');

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
    let userName = await User.findOne({ username: req.body.username});
    if (userName) {
        return res.status(400).send('Username is already registered!');
    }
    else {
        // Insert the new user if they do not exist yet
        user = new User(_.pick(req.body, ['firstname','lastname','username', 'email', 'password','roles']));
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        await user.save();
        const token = jwt.sign({ _id: user._id }, config.get('PrivateKey'));
        res.header('x-auth-token', token).send(_.pick(user, ['_id', 'username', 'email']));
    }
};

exports.login = async (req, res) => {
    // First Validate The HTTP Request
    const { error } = validateLogin(req.body);
    if (error) {
        return res.status(400).send(error.details[0].message);
    }
 
    //  Now find the user by their username
    let user = await User.findOne({ username: req.body.username });
    if (!user) {
        return res.status(400).send('Incorrect username or password.');
    }
 
    // Then validate the Credentials in MongoDB match
    // those provided in the request
    const validPassword = await bcrypt.compare(req.body.password, user.password);
    if (!validPassword) {
        return res.status(400).send('Incorrect username or password.');
    }
    const token = jwt.sign({ _id: user._id}, config.get('PrivateKey'));
    const roles = user.roles
    res.json({token, roles})
};
