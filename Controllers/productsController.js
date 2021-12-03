const Product = require("../models/Product");

exports.createProduct = async (req, res) => {
  try {
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
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find({ deleted: false });
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const id = req.params.productId;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

exports.updateProductById = async (req, res) => {
  try {
    const id = req.params.productId;
    const obj = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(id, obj, {
      new: true,
    });
    res.status(200).json(updatedProduct);
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

exports.deleteProductById = async (req, res) => {
  try {
    const id = req.params.productId;
    await Product.updateOne({ _id: id }, { $set: { deleted: true } });
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};
