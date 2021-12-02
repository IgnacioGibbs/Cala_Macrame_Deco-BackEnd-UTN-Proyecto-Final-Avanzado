const Product = require("../models/Product");

exports.createProduct = async (req, res) => {
  const { name, model, category, description, price, stock, img } = req.body;

  const newProduct = new Product({
    name,
    model,
    category,
    description,
    price,
    stock,
    img,
  });

  const productSaved = await newProduct.save();

  res.status(201).json(productSaved);
};

exports.getProducts = async (req, res) => {
  const products = await Product.find({ deleted: false });
  res.status(200).json(products);
};

exports.getProductById = async (req, res) => {
  const id = req.params.productId;
  const product = await Product.findById(id);
  res.status(200).json(product);
};

exports.updateProductById = async (req, res) => {
  const id = req.params.productId;
  const obj = req.body;
  const updatedProduct = await Product.findByIdAndUpdate(id, obj, {
    new: true,
  });
  res.status(200).json(updatedProduct);
};

exports.deleteProductById = async (req, res) => {
  const id = req.params.productId;
  await Product.updateOne({ _id: id }, { $set: { deleted: true } });
  res.status(200).json({ message: "Product deleted successfully" });
};
