const User = require("../models/User");

exports.signUp = async (req, res) => {
  try {
    res.json("signUp");
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

exports.signIn = async (req, res) => {
  try {
    res.json("signIn");
  } catch (error) {
    res.status(400).json({ error: error });
  }
};
