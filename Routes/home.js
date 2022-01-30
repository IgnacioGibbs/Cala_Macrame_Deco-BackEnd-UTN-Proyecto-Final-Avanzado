const express = require("express");
const router = express.Router();
const { getProducts } = require("../Controllers/productsController");

router.get("/", getProducts);

module.exports = router;
