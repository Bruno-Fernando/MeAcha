const Joi = require("@hapi/joi");
const userSchema = require("../validationSchemas/user");

const userValidation = (req, res, next) => {
  const { error } = userSchema.validate(req.body);

  if (error) return res.status(400).json(error.details[0].message);

  next();
};

module.exports = userValidation;
