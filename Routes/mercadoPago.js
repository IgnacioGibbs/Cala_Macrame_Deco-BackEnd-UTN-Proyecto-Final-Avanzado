const express = require("express");
const { preferences, view } = require("../controllers/mPController");
const router = express.Router();

router.get("/", view);
router.post("/", preferences);

module.exports = router;
