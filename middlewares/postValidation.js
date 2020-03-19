const {
  lostPostSchema,
  foundPostSchema
} = require("../validationSchemas/posts");

const lostPostValidation = (req, res, next) => {
  const { error } = lostPostSchema.validate(req.body);

  if (error) return res.status(400).json(error.details[0].message);

  next();
};

const foundPostValidation = (req, res, next) => {
  const { error } = foundPostSchema.validate(req.body);

  if (error) return res.status(400).json(error.details[0].message);

  next();
}

module.exports = { lostPostValidation, foundPostValidation };
