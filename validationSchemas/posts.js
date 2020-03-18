const Joi = require("@hapi/joi");

const antiInject = new RegExp("^[^$&{|]*$");

const basePostSchema = {
  title: Joi.string()
    .trim()
    .max(20)
    .pattern(antiInject)
    .required(),
  description: Joi.string()
    .max(300)
    .pattern(antiInject)
};

const lostPostSchema = Joi.object({
  ...basePostSchema,
  lostPlace: Joi.array().items(
    Joi.string()
      .max(50)
      .pattern(antiInject)
  ),
  bounty: Joi.number()
    .positive()
    .integer()
});

const foundPostSchema = Joi.object({
  ...basePostSchema,
  foundPlace: Joi.string()
    .trim()
    .pattern(antiInject)
    .required()
    .max(280),
  meetingPlace: Joi.string()
    .trim()
    .pattern(antiInject)
    .max(280)
});

module.exports = { lostPostSchema, foundPostSchema };
