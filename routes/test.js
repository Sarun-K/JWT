const express = require('express');
const router = express.Router();
const test = require('../controller/test');


router.route('/').post(test.create);


module.exports = router;