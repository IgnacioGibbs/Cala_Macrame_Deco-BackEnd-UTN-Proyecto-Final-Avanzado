const express = require("express");
const router = express.Router();
const { verifyToken } = require("../middlewares/authJwt");
const {
  createProduct,
  getProducts,
  getProductById,
  updateProductById,
  deleteProductById,
} = require("../controllers/productsController");

router.get("/", getProducts);

router.post("/", verifyToken, createProduct);

router.get("/:productId", getProductById);

router.put("/:productId", verifyToken, updateProductById);

router.delete("/:productId", verifyToken, deleteProductById);

module.exports = router;
