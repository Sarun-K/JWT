const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

var mongoose = require("mongoose");
var bodyParser = require('body-parser');

const mongoURI = 'mongodb://localhost:27017/JWT-NodeJs';
var mongoose = require("mongoose");

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));
