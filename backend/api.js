const Joi = require('joi');
const mongoose = require('mongoose');
const express = require('express');
const app = express();
const config = require('config');

// imports routes for the events
var routes = require('./routes/routes')

if (!config.get('PrivateKey')) {
    console.error('FATAL ERROR: PrivateKey is not defined.');
    process.exit(1);
}

mongoose.connect('mongodb://127.0.0.1/fyp')
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));
 
app.use(express.json());
app.use('/api', routes)
 
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
