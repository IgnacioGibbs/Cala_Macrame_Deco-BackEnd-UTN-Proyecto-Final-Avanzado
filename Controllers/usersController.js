const User = require("../Models/users");

exports.CreateUsers = async (req, res) => {
  console.log("Prueba de Post Usuarios");
  console.log("Body: ", req.body);
  try {
    let user;

    user = new User(req.body);

    await user.save();

    res.status(200).send({ message: "Usuario guardado con exito" });
  } catch (e) {
    console.log("Error en la creacion de usuario", e);
    res.status(400).send({ message: "Error en la creacion de usuario" });
  }
};
