const express = require("express");
const router = express.Router();
const { verifyToken, isModerator, isAdmin } = require("../middlewares/authJwt");
const {
  createProduct,
  getProducts,
  getProductById,
  updateProductById,
  deleteProductById,
} = require("../controllers/productsController");

router.get("/", getProducts);

router.post("/", [verifyToken, isModerator], createProduct);

router.get("/:productId", getProductById);

router.put("/:productId", [verifyToken, isModerator], updateProductById);

router.delete("/:productId", [verifyToken, isAdmin], deleteProductById);

module.exports = router;
