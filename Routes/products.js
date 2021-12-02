const express = require("express");
const router = express.Router();
const {
  createProduct,
  getProducts,
  getProductById,
  updateProductById,
  deleteProductById,
} = require("../controllers/productsController");

router.get("/", getProducts);

router.post("/", multer({ storage: storage }).array("images"), createProduct);

router.get("/:productId", getProductById);

router.put("/:productId", updateProductById);

router.delete("/:productId", deleteProductById);

module.exports = router;
