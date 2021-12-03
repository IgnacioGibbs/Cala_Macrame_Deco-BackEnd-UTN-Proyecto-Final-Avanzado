const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new Schema(
  {
    username: {
      type: "string",
      unique: true,
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
    name: {
      type: "string",
      require: true,
      trim: true,
    },
    surname: {
      type: "string",
      require: true,
      trim: true,
    },
    age: {
      type: "number",
      require: true,
      trim: true,
    },
    cel: {
      type: "number",
      require: true,
      trim: true,
    },
    roles: [
      {
        ref: "Role",
        type: Schema.Types.ObjectId, //Relacion entre el Schema de roles y el de Users
      },
    ],
    enabled: {
      type: "boolean",
      default: false,
    },
    deleted: {
      type: "boolean",
      default: false,
    },
  },
  {
    timestamps: true,
    versionkey: false,
  }
);

userSchema.statics.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

userSchema.statics.comparePassword = async (password, receivedPassword) => {
  return await bcrypt.compare(password, receivedPassword);
};

module.exports = model("User", userSchema);
