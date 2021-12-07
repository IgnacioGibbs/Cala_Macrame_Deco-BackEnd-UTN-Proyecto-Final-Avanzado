const express = require("express");
const router = express.Router();
const { signUp, signIn } = require("../controllers/authController");

const {
  checkDuplicateUsernameOrEmail,
  checkRolesExisted,
} = require("../middlewares/validationSignup");

router.post("/signin", signIn);

router.post(
  "/signup",
  [checkRolesExisted, checkDuplicateUsernameOrEmail],
  signUp
);

module.exports = router;
