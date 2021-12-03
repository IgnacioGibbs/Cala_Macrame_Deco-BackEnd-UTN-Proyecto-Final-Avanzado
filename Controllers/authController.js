const User = require("../models/User");
const Role = require("../models/Role");
const jwt = require("jsonwebtoken");
const fs = require("fs");
const privateKey = fs.readFileSync("./keys/private.pem");

const jwtOptions = { algorithm: "RS256", expiresIn: "1h" };

exports.signUp = async (req, res) => {
  try {
    const { username, password, email, roles, name, surname, age, cel } =
      req.body;

    const newUser = new User({
      username,
      password: await User.encryptPassword(password),
      email,
      name,
      surname,
      age,
      cel,
    });

    if (roles) {
      // busco el id de los roles asignado o si no lo encuentra uso User por defecto
      const foundRoles = await Role.find({ name: { $in: roles } });
      newUser.roles = foundRoles.map((role) => role._id);
    } else {
      const role = await Role.findOne({ name: "user" });
      newUser.roles = [role._id];
    }

    const savedUser = await newUser.save(); // Guardo el usuario en la DB

    const payload = {
      id: newUser._id,
      username: newUser.username,
      roles: newUser.roles,
    };

    const token = jwt.sign(payload, privateKey, jwtOptions); // Genero el token

    res
      .status(200)
      .json({ JWT: token, data: payload, message: "User saved successfully" });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

exports.signIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    const userFound = await User.findOne({ email: email }).populate("roles");

    if (!userFound) return res.status(406).json({ message: "User not found" });

    const matchPassword = await User.comparePassword(
      password,
      userFound.password
    );

    if (!matchPassword)
      return res.status(401).json({ token: null, message: "Invalid password" });

    const payload = {
      id: userFound._id,
      username: userFound.username,
      roles: userFound.roles,
    };

    const token = jwt.sign(payload, privateKey, jwtOptions);

    res.json({ token: token });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};
