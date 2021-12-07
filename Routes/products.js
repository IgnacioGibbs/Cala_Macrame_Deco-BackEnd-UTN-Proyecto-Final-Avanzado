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

router.get("/", getProducts);

router.post(
  "/",
  [/*verifyToken, isModerator,*/ multer.single("image")],
  createProduct
);

router.get("/:productId", getProductById);

router.put(
  "/:productId",
  [verifyToken, isModerator, multer.single("image")],
  updateProductById
);

router.delete("/:productId", [verifyToken, isAdmin], deleteProductById);

module.exports = router;
 