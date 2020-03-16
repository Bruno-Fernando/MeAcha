const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const userValidation = require("../middlewares/userValidation");

router.post("/register", userValidation, (req, res) => {
  User.findOne({ email: req.body.email }, async (err, user) => {
    if (err) {
      return res.status(500).json({
        sucess: false,
        error: "server error"
      });
    } else if (user) {
      return res.status(400).json({
        sucess: false,
        error: "user already exists"
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
            sucess: false,
            error: "server save error"
          });
        }
        // TODO validacao por email
        return res.status(201).json({
          sucess: true
        });
      });
    }
  });
});
//get perfil /user e|ou /user/:id
//put perfil /user ou /user/:id
//delete perfil /user ou /user/:id

module.exports = router;
