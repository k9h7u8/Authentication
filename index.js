const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser')
require('dotenv').config()
const port = process.env.PORT;
const config = require('./config');
const userController = require('./user.controller');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.urlencoded({ extended: true }));
app.post('/register', userController.register);
app.post('/login', userController.login);

app.listen(port,
    console.log(`Listening to port ${port}`)
)