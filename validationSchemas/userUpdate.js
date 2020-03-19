const Joi = require("@hapi/joi");

const antiInject = new RegExp("^[^$&{|]*$");

const userSchema = Joi.object({
  name: Joi.string()
    .trim()
    .min(4)
    .max(15)
    .pattern(antiInject)
});

module.exports = userSchema;
