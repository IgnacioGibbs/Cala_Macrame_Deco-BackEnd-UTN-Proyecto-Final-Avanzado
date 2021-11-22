const mongoose = require("mongoose");

// Schema de prueba para MongoDB

const userSchema = mongoose.Schema({
  name: {
    type: "string",
    require: true,
    trim: true,
    min: 3,
    max: 255,
  },
  password: {
    type: "string",
    trim: true,
    require: true,
    min: 6,
    max: 255,
  },
  email: {
    type: "string",
    require: true,
    trim: true,
    unique: true,
    min: 6,
    max: 255,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
