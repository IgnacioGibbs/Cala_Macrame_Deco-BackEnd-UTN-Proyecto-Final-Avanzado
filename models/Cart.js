const { Schema, model } = require("mongoose");

const CartSchema = new Schema(
  {
    userId: [
      {
        ref: "User",
        type: Schema.Types.ObjectId,
      },
    ],
    items: [
      {
        productId: {
          ref: "Product",
          type: Schema.Types.ObjectId,
        },
        quantity: {
          type: "number",
          require: true,
          min: [1, "Quantity can not be lesser than one"],
        },
        price: {
          type: Number,
          required: true,
        },
        total: {
          type: Number,
          required: true,
        },
      },
    ],
    subTotal: {
      type: Number,
      require: true,
    },
  },
  {
    timestamps: true,
    versionkey: false,
  }
);

module.exports = model("Cart", CartSchema);
