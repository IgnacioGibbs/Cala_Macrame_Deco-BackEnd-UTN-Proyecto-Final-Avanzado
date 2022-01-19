const express = require("express");
const router = express.Router();
const {
  signUp,
  signIn,
  verify,
  verified,
} = require("../controllers/authController");
const validation = require("../services/dataValidation");
const { userSchema } = require("../middlewares/schemas/user");
const {
  checkDuplicateUsernameOrEmail,
  checkRolesExisted,
} = require("../middlewares/validationSignup");

router.post("/signin", signIn);

router.post(
  "/signup",
  [checkRolesExisted, checkDuplicateUsernameOrEmail, validation(userSchema)],
  signUp
);

router.get("/verify/:uid", verify);
router.get("/verified", verified);

module.exports = router;
