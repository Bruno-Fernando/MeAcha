const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const userValidation = require("../middlewares/userValidation");
const authValidation = require("../middlewares/authValidation");
const userUpdateValidation = require("../middlewares/userUpdateValidation");

router.post("/register", userValidation, (req, res) => {
  User.findOne({ email: req.body.email }, async (err, user) => {
    if (err) {
      return res.status(500).json({
        success: false,
        error: "Server error"
      });
    } else if (user) {
      return res.status(400).json({
        success: false,
        error: "User already exists"
      });
    } else {
      const { name, email, password } = req.body;

      const salt = await bcrypt.genSalt(12);
      const hashedPassword = await bcrypt.hash(password, salt);

      let newUser = new User({
        name,
        email,
        password: hashedPassword
      });

      User.create(newUser, (err, createdUser) => {
        if (err) {
          return res.status(500).json({
            success: false,
            error: "Server save error"
          });
        }
        // TODO validacao por email
        return res.status(201).json({
          success: true
        });
      });
    }
  });
});

router
  .route("user/:id")
  .get((req, res) => {
    User.findById(req.params.id)
      .select("-password")
      .then(user => {
        return res.status(200).json({
          success: true,
          user
        });
      })
      .catch(err => {
        return res.status(500).json({
          success: false,
          error: "Server error"
        });
      });
  })
  .put(authValidation, userUpdateValidation, (req, res) => {
    if (req.user != req.params.id) {
      return res.status(403).json({
        success: false,
        error: "Not allowed"
      });
    }

    User.findOneAndUpdate(req.params.id, { ...req.body }, err => {
      if (err) {
        return res.status(500).json({
          success: false,
          error: "Server error"
        });
      }
      return res.status(200).json({
        success: true
      });
    });
  })
  .delete(authValidation, (req, res) => {
    if (req.user != req.params.id) {
      return res.status(403).json({
        success: false,
        error: "Not allowed"
      });
    }

    User.deleteOne(req.params.id, err => {
      if (err) {
        return res.status(500).json({
          success: false,
          error: "Server error"
        });
      }
    });

    return res.status(200).json({
      success: true
    });
  });

module.exports = router;
