var express = require('express'),
router = express.Router();
var bodyParser = require('body-parser');
var jwt = require('jsonwebtoken');
var authenticateToken = "";
router.use(bodyParser.json());

global.users=[
  {
    "id":"adm01",
    "userName":"sagarpatke@gmail.com",
    "password":"password",
    "role":"admin"
  },
  {
    "id":"adm02",
    "userName":"neelanjansen@gmail.com",
    "password":"password",
    "role":"admin"
  },
  {
    "id":3,
    "userName":"vishantsharma@gmail.com",
    "password":"password",
    "role":"user"
  },{
    "id":4,
    "userName":"kirtijalan@gmail.com",
    "password":"password",
    "role":"user"
  },{
    "id":5,
    "userName":"nitinverma@gmail.com",
    "password":"password",
    "role":"user"
  },{
    "id":6,
    "userName":"dhivyalakshmi@gmail.com",
    "password":"password",
    "role":"user"
  },{
    "id":7,
    "userName":"laljose@gmail.com",
    "password":"password",
    "role":"user"
  },{
    "id":8,
    "userName":"srinivasan@gmail.com",
    "password":"password",
    "role":"user"
  }
];

router.post('/login',function(req,res){
  //check if users exists
  console.log("users");
  var username = req.body.userName;
  var pwd = req.body.password;
  console.log("username is " , username);
  for(var i=0;i<global.users.length;i++){
    if(username==users[i].userName){
      if(pwd==users[i].password){
        console.log("valid user");
        authenticateToken=jwt.sign({user:username, name:users[i].userName,sub:'Quizztack',admin:true}, "QuizztackAdmin")
        res.status(200).json({
          message: authenticateToken,
          error: false
        });
      }
      else{
        console.log("incorrect pwd . forgot password?");
        res.status(401).json({
          message: "User Email or Password is Incorrect",
          error: true
        });

      }
    }else {
      console.log('invalid');
  }
}
});

module.exports = router;
