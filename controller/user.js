const userModel = require('../models/user');
const bcrypt = require('bcrypt'); 
const jwt = require('jsonwebtoken');
module.exports = {
 create: function(req, res, next) {
  
  userModel.create(
     { 
        
         username: req.body.username, 
         email: req.body.email, 
         password: req.body.password,
         firstname: req.body.firstname,
         lastname: req.body.lastname,
      
      }, function (err, result) {
      if (err) 
       next(err);
      else
       res.json({status: "success", message: "User added successfully!!!", data: null});
      
    });
 },

authenticate: function(req, res, next) {
  userModel.findOne({username:req.body.username}, function(err, userInfo){
   console.log("\x1b[31m","find user",userInfo);
     if (userInfo === null) {
      
      console.log("\x1b[31m"," cant find user");
      res.json({status:"error", message:"Invalid username/password"});
      next(err);
     } 
     else {
      console.log("\x1b[31m","find user",req.body.password);
        
         if(bcrypt.compareSync(req.body.password, userInfo.password)) {

            const token = jwt.sign({id: userInfo._id}, 
            req.app.get('secretKey'), { expiresIn: '1h' });
            res.json({status:"success", message: "user found!!!", data:{user: userInfo, token:token}});

         }
         else{
            res.json({status:"error", message: "Invalid username/password", data:null});
            }
        
         
     }
    });
 },
 fech: function(req, res) {
    userModel.find(function(err, test) {
         if (err)
             res.send(err);
 
         res.json(test);
     });
 },

}
