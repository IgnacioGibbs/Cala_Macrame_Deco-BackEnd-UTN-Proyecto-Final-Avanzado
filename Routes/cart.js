const express = require("express");
const router = express.Router();
const cart = require("./../Controllers/cartController");
const { verifyToken, isModerator, isAdmin } = require("../middlewares/authJwt");

router.get("/:userId", /* verifyToken*/ cart.userCart);
router.post("/", /* verifyToken*/ cart.buy);
router.put("/:id", /* verifyToken*/ cart.updateCart);
router.delete("/:id", /* verifyToken*/ cart.delete);

module.exports = router;
