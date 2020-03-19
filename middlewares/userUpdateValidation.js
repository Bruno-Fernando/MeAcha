const userUpdateSchema = require("../validationSchemas/userUpdate");

const userUpdateValidation = (req, res, next) => {
  const { error } = userUpdateSchema.validate(req.body);

  if (error) return res.status(400).json(error.details[0].message);

  next();
};

module.exports = userUpdateValidation;
