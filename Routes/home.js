const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Home de Proyecto Final Avanzado Back-End");
});

module.exports = router;
 