const jwt = require("jsonwebtoken");
const TOKEN_SECRET = require("../config/jwtsecret");

const authValidation = (req, res, next) => {
  const token = req.header("auth-token");

  if (!token) {
    return res.status(401).json({
      sucess: false,
      error: "acess denied"
    });
  }

  try {
    const verified = jwt.verify(token, TOKEN_SECRET);
    res.user = verified;

    next();
  } catch (err) {
    return res.status(400).json({
      sucess: false,
      error: "invalid token"
    });
  }
};

module.exports = authValidation;
