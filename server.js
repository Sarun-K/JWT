const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const logger = require('morgan');

var bodyParser = require('body-parser');
var cors = require('cors');
var router = express.Router(); 

const mongoURI = 'mongodb://localhost:27017/JWT-NodeJs';
var mongoose = require("mongoose");
mongoose.connect(mongoURI);

app.set('secretKey', 'jwt-nodejs-test'); // jwt secret token
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: true, limit: '10mb'  }));
app.use(bodyParser.json({ limit: '10mb' }));
app.use('/api', router);

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});


///////////////////////////////////////////////
///// API
///////////////////////////////////////////////

router.use('/users', require('./routes/user')); // register, auth
router.use('/test', require('./routes/test'));

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));