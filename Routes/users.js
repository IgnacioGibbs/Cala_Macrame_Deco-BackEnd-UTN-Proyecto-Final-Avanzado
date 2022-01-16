const express = require("express");
const router = express.Router();
const {
  getUsers,
  getUserById,
  updateUserById,
  deleteUserById,
} = require("../controllers/usersController");
const { isModerator, isAdmin, verifyToken } = require("../middlewares/authJwt");
const { checkRolesExisted } = require("../middlewares/validationSignup");

router.get("/users", [verifyToken, isModerator], getUsers);
router.get("/:usersId", [verifyToken, isModerator], getUserById);
router.put("/:usersId", [verifyToken, isModerator], updateUserById);
router.delete("/:usersId", [verifyToken, isAdmin], deleteUserById);

module.exports = router;
