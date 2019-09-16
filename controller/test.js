const Test = require('../models/test')
const _ = require("lodash");


exports.create = function(req, res, next) {
  var test = new Test();    

  test.name = req.body.name;
  
  test.save(function(err) {
      if (err)
          res.send(err);

      res.json({ message: 'Issue created!' });
  });

};