const Joi = require("@hapi/joi");
const {
  lostPostSchema,
  foundPostSchema
} = require("../validationSchemas/posts");

const lostPostValidation = (req, res, next) => {
  const { error } = lostPostSchema.validate(req.body);

  if (error) return res.status(400).json(error.details);

  next();
};

const foundPostValidation = (req, res, next) => {
  const { error } = foundPostSchema.validate(req.body);

  if (error) return res.status(400).json(error.details);

  next();
}

module.exports = { lostPostValidation, foundPostValidation };
