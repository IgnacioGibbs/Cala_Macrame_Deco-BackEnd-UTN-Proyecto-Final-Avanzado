const User = require("../models/User");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const privateKey = fs.readFileSync("./keys/private.pem");

exports.CreateUsers = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    let user = await User.findOne({ email: email }); // Validamos que el usuario sea unico por el registro de su email

    if (user) {
      return res.status(400).json({ message: "El usuario ya esta registrado" });
    }

    user = new User(req.body);

    const salt = await bcryptjs.genSalt(10); // Salt para el hash

    user.password = await bcryptjs.hash(password, salt); // Hashea el password

    await user.save(); // Guarda el nuevo usuario en la DB

    const jwtOptions = { algorithm: "RS256", expiresIn: "1h" };

    const payload = { username: username };

    const token = jwt.sign(payload, privateKey, jwtOptions); // Genero el token

    res.status(200).json({
      JWT: token,
      data: { username },
      message: "Usuario guardado con exito",
    });
  } catch (e) {
    res.status(400).json({ message: "Error en la creacion de usuario" });
  }
};
