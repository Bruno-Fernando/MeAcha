const Joi = require("@hapi/joi");
const {
  lostPostSchema,
  foundPostSchema
} = require("../validationSchemas/postUpdate");

const lostPostUpdateValidation = (req, res, next) => {
  const { error } = lostPostSchema.validate(req.body);

  if (error) return res.status(400).json(error.details[0].message);

  next();
};

const foundPostUpdateValidation = (req, res, next) => {
  const { error } = foundPostSchema.validate(req.body);

  if (error) return res.status(400).json(error.details[0].message);

  next();
}

module.exports = { lostPostUpdateValidation, foundPostUpdateValidation };
