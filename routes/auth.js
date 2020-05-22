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
        success: false,
        error: "Server error",
      });
    } else if (!user) {
      return res.status(400).json({
        success: false,
        error: "Email is not found",
      });
    } else {
      const validPass = await bcrypt.compare(req.body.password, user.password);

      if (!validPass) {
        return res.status(400).json({
          success: false,
          error: "Invalid password",
        });
      }

      jwt.sign({ token: user._id }, TOKEN_SECRET, (err, token) => {
        return res.json({
          success: true,
          token,
        });
      });
    }
  });
});

module.exports = router;

//auth/confirm/tokenIds para efetuar a validacao por email
