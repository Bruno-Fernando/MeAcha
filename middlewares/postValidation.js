const {
  lostPostSchema,
  foundPostSchema,
} = require("../validationSchemas/posts");

const postValidation = (req, res, next) => {
  const { category, ...reqPost } = req.body;
  if (category == "lost") {
    lostPostValidation(req, res, reqPost, next);
  } else {
    foundPostValidation(req, res, reqPost, next);
  }
};

const lostPostValidation = (req, res, reqPost, next) => {
  const { error } = lostPostSchema.validate(reqPost);

  if (error) return res.status(400).json(error.details[0].message);

  next();
};

const foundPostValidation = (req, res, reqPost, next) => {
  const { error } = foundPostSchema.validate(reqPost);

  if (error) return res.status(400).json(error.details[0].message);

  next();
};

module.exports = postValidation;
