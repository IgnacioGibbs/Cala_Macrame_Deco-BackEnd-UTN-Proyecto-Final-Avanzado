const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("Pagina de Productos de Proyecto Final Avanzado Back-End");
});

module.exports = router;
