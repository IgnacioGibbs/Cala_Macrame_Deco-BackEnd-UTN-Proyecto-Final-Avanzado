const joi = require("@hapi/joi");
const dt = new Date();

exports.userSchema = joi.object({
  username: joi.string().min(3).max(15).required().messages({
    "any.required": "Necesitas un nombre de usuario",
    "string.min": "Necesitas por lo menos 3 caracteres",
    "string.max": "Usuario demasiado largo",
    "string.empty": "Nombre de usuario requerido",
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
      "string.max": "Largo maximo alcanzado de contraseña (15 caracteres)",
      "string.empty": "Campo contraseña obligatorio",
      "string.pattern.base": "La contraseña debe ser alfanumerica",
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
      "string.empty": "Email no puede estar vacio",
      "string.email": "Debes pasar un email valido",
    }),
  name: joi
    .string()
    .pattern(
      new RegExp(
        "^[a-zA-ZÀ-ÿ\u00f1\u00d1 ]+(s*[a-zA-ZÀ-ÿ\u00f1\u00d1 ]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1 ]+$"
      )
    )
    .max(15)
    .required()
    .messages({
      "string.empty": `Nombre requerido`,
      "string.max": `Nombre demasiado largo`,
      "string.pattern.base":
        "El Nombre debe contener unicamente caracteres alfabeticos",
    }),
  surname: joi
    .string()
    .max(15)
    .pattern(
      new RegExp(
        "^[a-zA-ZÀ-ÿ\u00f1\u00d1 ]+(s*[a-zA-ZÀ-ÿ\u00f1\u00d1 ]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1 ]+$"
      )
    )
    .required()
    .messages({
      "string.empty": `Apellido requerido`,
      "string.max": `Apellido demasiado largo`,
      "string.pattern.base":
        "El Apellido debe contener unicamente caracteres alfabeticos",
    }),
  birthYear: joi
    .number()
    .integer()
    .min(dt.getFullYear() - 120)
    .max(dt.getFullYear() - 18)
    .required()
    .messages({
      "number.base": "Por favor definir el año de nacimiento",
      "number.min": "Usted deberia estar bajo tierra",
      "number.max": "Es neceserio ser mayor de edad para registrarse",
    }),
  cel: joi
    .string()
    .min(10)
    .max(21)
    .pattern(
      new RegExp(
        "^[+]?[0-9]{1,2}[ ]?[-(]?[0-9]{2,4}[)-]?[ ]?[0-9]{3,4}[- ]?[0-9]{4,6}"
      )
    )
    .required()
    .messages({
      "string.pattern.base": "Debe indicar un numero de celular valido",
      "string.empty": "Su celular es requerido",
      "string.min": "Número inválido (demasiado corto)",
      "string.max": "Número inválido (demasiado largo)",
    }),
});
