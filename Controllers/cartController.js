const Cart = require("../models/Cart");

exports.buy = async (req, res) => {
  try {
    const newCart = new Cart(req.body);
    const savedItem = await newCart.save();
    res.status(200).json(savedItem);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.getAll = async (req, res) => {
  try {
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.userCart = async (req, res) => {
  try {
    const cart = await Cart.findOne({
      userId: req.params.userId,
    });
    res.status(200).json(cart);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.updateCart = async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedCart);
  } catch (err) {
    res.status(500).json(err);
  }
};

exports.delete = async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Item has been deleted successfully");
  } catch (err) {
    res.status(500).json(err);
  }
};
