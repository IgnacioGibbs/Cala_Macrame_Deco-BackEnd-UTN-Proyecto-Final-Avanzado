const joi = require("@hapi/joi");

exports.productSchema = joi.object({
  name: joi
    .string()
    .required()
    .messages({ "any.required": "Nombre requerido" }),
  model: joi.string().required().messages({ "any.required": "Definir modelo" }),
  category: joi
    .string()
    .required()
    .messages({ "any.required": "Definir categoria" }),
  description: joi
    .string()
    .required()
    .messages({ "any.required": "Descripcion obligatoria" }),
  price: joi
    .number()
    .required()
    .messages({
      "any.required": "Definir precio",
      "number.base": "Debes agregar un numero",
    }),
  stock: joi
    .number()
    .required()
    .messages({
      "any.required": "Definir el stock disponible",
      "number.base": "Debes agregar un numero",
    }),
  imgTitle: joi
    .string()
    .required()
    .messages({ "any.required": "Definir titulo de la imagen" }),
  imgDescription: joi
    .string()
    .required()
    .messages({ "any.required": "Definir descripcion de la imagen" }),
});
