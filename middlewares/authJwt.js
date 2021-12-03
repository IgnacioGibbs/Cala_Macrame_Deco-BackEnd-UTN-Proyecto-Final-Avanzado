const jwt = require("jsonwebtoken");
const fs = require("fs");
const publicKey = fs.readFileSync("./keys/public.pem");
const User = require("../models/User");

exports.verifyToken = async (req, res, next) => {
  try {
    const token = req.headers["token"];

    if (!token) return res.status(403).json({ message: "No token provided" });

    const decoded = jwt.verify(token, publicKey);

    const user = await User.findById(decoded.id);

    if (!user) return res.status(404).json({ message: "No user found" });

    next();
  } catch (error) {
    return res.status(401).json({ message: "Unauthorized" });
  }
};
