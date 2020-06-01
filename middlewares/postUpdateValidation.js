const {
  lostPostSchema,
  foundPostSchema,
} = require("../validationSchemas/postUpdate");

const postUpdateValidation = (req, res, next) => {
  const { category, ...reqPost } = req.body;

  if (category == "lost") {
    lostPostUpdateValidation(req, res, reqPost, next);
  } else {
    foundPostUpdateValidation(req, res, reqPost, next);
  }
};

const lostPostUpdateValidation = (req, res, reqPost, next) => {
  const { error } = lostPostSchema.validate(reqPost);

  if (error) return res.status(400).json(error.details[0].message);

  next();
};

const foundPostUpdateValidation = (req, res, reqPost, next) => {
  const { error } = foundPostSchema.validate(reqPost);

  if (error) return res.status(400).json(error.details[0].message);

  next();
};

module.exports = postUpdateValidation;
