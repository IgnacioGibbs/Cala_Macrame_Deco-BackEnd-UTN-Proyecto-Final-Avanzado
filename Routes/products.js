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
const multer = require("../config/multer");
const validation = require("../services/dataValidation");
const { productSchema } = require("../middlewares/schemas/products");

router.get("/", verifyToken, getProducts);

router.post(
  "/",
  [verifyToken, isModerator, validation(productSchema), multer.single("image")],
  createProduct
);

router.get("/:productId", verifyToken, getProductById);

router.put(
  "/:productId",
  [verifyToken, isModerator, validation(productSchema), multer.single("image")],
  updateProductById
);

router.delete("/:productId", [verifyToken, isAdmin], deleteProductById);

module.exports = router;
 