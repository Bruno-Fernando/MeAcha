const express = require("express");
const router = express.Router();
const User = require("../models/User");

router.get("/login", (req, res) => {
  User.findOne({ email: req.body.email }).then();
});

//auth/login
//auth/confirm/tokenIds
