const express = require('express');
const router = express.Router();
const user = require('../controller/user');


router.post('/register', user.create);

router.route('/get').get(user.fech);


module.exports = router;