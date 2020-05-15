const User = require("../models/User");

const userExistsValidation = (req, res, next) => {

  User.findOne({ email: req.body.email }, async (err, user) => {
    if (err) {
      return res.status(500).json({
        success: false,
        error: "Server error",
      });
    } else if (user) {
      return res.status(400).json({
        success: false,
        error: "User already exists",
      });
    } else {
      next();
    }
  });
};

module.exports = userExistsValidation;
