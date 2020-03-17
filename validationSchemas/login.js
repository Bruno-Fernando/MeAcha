const Joi = require("@hapi/joi");

const antiInject = new RegExp("^[^$&{|]*$");

const loginSchema = Joi.object({
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

module.exports = loginSchema;
