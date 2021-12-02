const { Schema, model } = require("mongoose");

const imgProductSchema = new Schema(
  {
    name: String,
    imgUid: String, //  Tiene que ser el path
  },
  {
    timestamps: true,
    versionkey: false,
  }
);

module.exports = model("imgProduct", imgProductSchema);
