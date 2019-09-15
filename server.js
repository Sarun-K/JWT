const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const logger = require('morgan');

var mongoose = require("mongoose");
var bodyParser = require('body-parser');

const mongoURI = 'mongodb://localhost:27017/JWT-NodeJs';
var mongoose = require("mongoose");



app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb'  }));
app.use(bodyParser.json({ limit: '10mb' }));

var router = express.Router(); 

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));