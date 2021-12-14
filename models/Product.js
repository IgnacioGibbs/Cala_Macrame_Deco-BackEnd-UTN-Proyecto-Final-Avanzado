const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    name: {
      type: "string",
      require: true,
      trim: true,
      min: 1,
      max: 255,
    },
    model: {
      type: "string",
      require: true,
      trim: true,
      min: 1,
      max: 255,
    },
    category: {
      type: "string",
      require: true,
      trim: true,
      min: 1,
      max: 255,
    },
    description: {
      type: "string",
      require: true,
      trim: true,
      min: 1,
      max: 255,
    },
    price: {
      type: "number",
      require: true,
    },
    stock: {
      type: "number",
      require: true,
    },
    img: [
      {
        ref: "Photos",
        type: Schema.Types.ObjectId,
      },
    ],
    deleted: {
      type: "boolean",
      default: false,
    },
    feature: {
      type: "boolean",
      default: false,
    },
  },
  {
    timestamps: true,
    versionkey: false,
  }
);

module.exports = model("Product", productSchema);
