const Joi = require("@hapi/joi");

const basePostSchema = {
  authorName: Joi.string()
    .trim()
    .min(4)
    .max(15)
    .required(),
  authorEmail: Joi.string()
    .trim()
    .min(6)
    .email()
    .required(),
  title: Joi.string()
    .trim()
    .max(20)
    .required(),
  description: Joi.string().max(300)
};

const lostPostSchema = Joi.object({
  ...basePostSchema,
  lostPlace: Joi.array().items(Joi.string().max(50)),
  bounty: Joi.number()
    .positive()
    .integer()
});

const foundPostSchema = Joi.object({
  ...basePostSchema,
  foundPlace: Joi.string()
    .trim()
    .required()
    .max(280),
  meetingPlace: Joi.string()
    .trim()
    .max(280)
});

module.exports = { lostPostSchema, foundPostSchema };
