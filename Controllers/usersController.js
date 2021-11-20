const User = require("../Models/users");
const bcryptjs = require("bcryptjs");

exports.CreateUsers = async (req, res) => {
  console.log("Prueba de Post Usuarios");
  console.log("Body: ", req.body);
  try {
    const { email, password } = req.body;

    let user = await User.findOne({ email: email }); // Validamos que el usuario sea unico por el registro de su email

    if (user) {
      return res.status(400).json({ message: "El usuario ya esta registrado" });
    }

    user = new User(req.body);

    const salt = await bcryptjs.genSalt(10); // Salt para el hash

    user.password = await bcryptjs.hash(password, salt); // Hashea el password

    await user.save(); // Guarda el nuevo usuario en la DB

    res.status(200).json({ message: "Usuario guardado con exito" });
  } catch (e) {
    console.log("Error en la creacion de usuario", e);
    res.status(400).json({ message: "Error en la creacion de usuario" });
  }
};
