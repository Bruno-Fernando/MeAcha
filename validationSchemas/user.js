const Joi = require("@hapi/joi");

const antiInject = new RegExp("^[^$&{|]*$");

const userSchema = Joi.object({
  name: Joi.string()
    .trim()
    .min(4)
    .max(15)
    .pattern(antiInject)
    .required(),
  email: Joi.string()
    .trim()
    .min(6)
    .email()
    .pattern(antiInject)
    .required(),
  password: Joi.string()
    .min(8)
    .max(20)
    .pattern(antiInject)
    .required()
});

module.exports = userSchema;
