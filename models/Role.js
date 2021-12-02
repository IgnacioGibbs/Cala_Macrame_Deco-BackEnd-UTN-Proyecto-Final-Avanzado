const { Schema, model } = require("mongoose");

const roleSchema = new Schema(
  {
    name: String,
  },
  {
    versionkey: false,
  }
);

export default model("role", roleSchema);
