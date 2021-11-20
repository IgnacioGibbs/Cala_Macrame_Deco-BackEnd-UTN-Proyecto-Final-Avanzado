const mongoose = require("mongoose");

// Schema de prueba para MongoDB

const userSchema = mongoose.Schema({
  name: {
    type: "string",
    require: true,
    trim: true,
  },
  password: {
    type: "string",
    trim: true,
    require: true,
  },
  email: {
    type: "string",
    require: true,
    trim: true,
    unique: true,
  },
  timestamp: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("User", userSchema);
