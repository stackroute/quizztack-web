var express = require('express'),
router = express.Router();

global.users=[
  {
    "id":1,
    "userName":"sagarpatke@gmail.com",
    "password":"password"
  },
  {
    "id":2,
    "userName":"neelanjansen@gmail.com",
    "password":"password"
  },
  {
    "id":3,
    "userName":"vishantsharma@gmail.com",
    "password":"password"
  },{
    "id":4,
    "userName":"kirtijalan@gmail.com",
    "password":"password"
  },{
    "id":5,
    "userName":"nitinverma@gmail.com",
    "password":"password"
  },{
    "id":6,
    "userName":"dhivyalakshmi@gmail.com",
    "password":"password"
  },{
    "id":7,
    "userName":"laljose@gmail.com",
    "password":"password"
  },{
    "id":8,
    "userName":"srinivasan@gmail.com",
    "password":"password"
  }
];

router.post('/login',function(req,res){
  //check if users exists
  console.log("users");
  var username = req.body.userName;
  console.log("username is " , username);
  var password = req.body.password;
  console.log(" username:" + username);
  for(var i=0;i<=users.length;i++){
    if(username==users[i].userName){
      console.log("valid user");
    }else {
      console.log('invalid');
    }

    // res.status().json({message:"",err:false});
  }
});

module.exports = router;
