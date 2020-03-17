const express = require("express");
const router = express.Router();
const User = require("../models/User");
const loginValidation = require('../middlewares/loginValidation');

router.post("/login", loginValidation,(req, res) => {
  User.findOne({ email: req.body.email }, (err, user) =>{
    if(err){
      return res.status(500).json({
        sucess: false,
        error: ""
      })
    }
  });
});

//auth/login
//auth/confirm/tokenIds
