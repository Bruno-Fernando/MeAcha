const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const loginValidation = require("../middlewares/loginValidation");
const TOKEN_SECRET = require("../config/jwtsecret");

router.post("/login", loginValidation, (req, res) => {
  User.findOne({ email: req.body.email }, async (err, user) => {
    if (err) {
      return res.status(500).json({
        sucess: false,
        error: "server error"
      });
    } else if (!user) {
      return res.status(400).json({
        sucess: false,
        error: "email is not found"
      });
    } else {
      const validPass = await bcrypt.compare(req.body.password, user.password);

      if (!validPass) {
        return res.status(400).json({
          sucess: false,
          error: "invalid password"
        });
      }

      const token = jwt.sign({ _id: user._id }, TOKEN_SECRET);

      res.header("auth-token", token);
    }
  });
});

module.exports = router;

//auth/confirm/tokenIds para efetuar a validacao por email
