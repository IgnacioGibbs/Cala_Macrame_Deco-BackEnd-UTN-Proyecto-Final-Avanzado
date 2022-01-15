const joi = require("@hapi/joi");
const dt = new Date();

exports.userSchema = joi.object({
  username: joi.string().min(3).max(15).required().messages({
    "any.required": "Necesitas un nombre de usuario",
    "string.min": "Necesitas por lo menos 3 caracteres",
    "string.max": "Usuario demasiado largo",
  }),
  password: joi
    .string()
    .min(6)
    .max(15)
    .pattern(new RegExp("^[a-zA-Z0-9]{6,15}$"))
    .required()
    .messages({
      "any.required": "Campo contraseña obligatorio",
      "string.min": "Contraseña muy corta, necesitas almenos 8 caracteres",
      "string.max": "Largo maximo alcanzado (15 caracteres)",
    }),
  email: joi
    .string()
    .email({
      minDomainSegments: 2,
      tlds: {
        allow: ["com", "net"],
      },
    })
    .required()
    .messages({
      "any.required": "Necesitas un mail valido",
    }),
  name: joi
    .string()
    .pattern(new RegExp("^[a-zA]"))
    .max(15)
    .required()
    .messages({
      "any.required": "Nombre requerido",
      "string.max": "Nombre demasiado largo",
    }),
  surname: joi.string().max(15).required().messages({
    "any.required": "Campo apellido obligatorio",
  }),
  birthYear: joi
    .number()
    .integer()
    .min(dt.getFullYear - 120)
    .max(dt.getFullYear - 18)
    .required()
    .messages({
      "any.required": "Por favor definir edad",
      "number.min": "Usted deveria estar bajo tierra",
      "number.max": "es neceserio ser mayor de edad para registrarse",
    }),
  cel: joi.number().min(10).max(13).required().messages({
    "any.required": "Nombre requerido",
    "number.min": "Numero invalido (demasiado corto)",
    "number.max": "Numero invalido (demasiado largo)",
  }),
});
