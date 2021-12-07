const express = require("express");
const router = express.Router();
const { createUser } = require("../controllers/userController");
const { isModerator, isAdmin, verifyToken } = require("../middlewares/authJwt");
const { checkRolesExisted } = require("../middlewares/validationSignup");

router.get("/");
router.post("/", [checkRolesExisted, verifyToken, isAdmin], createUser);

module.exports = router;
