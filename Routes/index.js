const express = require("express");
const auth = require("./auth");
const cart = require("./cart");
const home = require("./home");
const MP = require("./mercadoPago");
const products = require("./products");
const users = require("./users");

const router = express.Router();

router.use("/api", home);
router.use("/api/productos", products);
router.use("/api/users", users);
router.use("/api/auth", auth);
router.use("/api/carts", cart);
router.use("/api/MP", MP);

module.exports = router;
