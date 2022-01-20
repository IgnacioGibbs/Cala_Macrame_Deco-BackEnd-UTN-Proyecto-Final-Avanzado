const Product = require("../models/Product");
const { createPhoto } = require("../services/photos");

exports.createProduct = async (req, res) => {
  try {
    const {
      name,
      model,
      category,
      description,
      price,
      stock,
      imgTitle,
      imgDescription,
    } = req.body;

    const { path } = req.file;

    const backPath = `process.env.URL_SERVER: process.env.PORT_SERVER/${path}`;

    const newProduct = new Product({
      name,
      model,
      category,
      description,
      price,
      stock,
    });

    const photo = await createPhoto({ imgTitle, imgDescription, backPath });

    newProduct.img = photo._id;

    const productSaved = await newProduct.save();

    res.status(201).json({ message: "productSaved", productSaved });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.aggregate([
      {
        $lookup: {
          from: "photos",
<<<<<<< HEAD
          localField: "img",
          foreignField: "_id",
          as: "img",
        },
      },
    ]);
=======
          localField: "photos",
          foreignField: "_id",
          as: "photos",
        },
      },
    ]);
   
>>>>>>> 2510a9b214852156197365f9cb6948d468f212f4
    res.status(200).json({ products });
  } catch (error) {
    res.status(400).json({ error: error });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const id = req.params.productId;
    const product = await Product.findById(id);
    res.status(200).json({ product });
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
    res.status(200).json({ updatedProduct: updatedProduct });
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
