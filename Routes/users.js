const express = require("express");
const router = express.Router();
const usersController = require("./../Controllers/usersController");

router.get("/", (req, res) => {
  res.send("Pagina de Usuarios de Proyecto Final Avanzado Back-End");
});

// POST DE PRUEBA PARA MONGODB

router.post("/", usersController.CreateUsers); // Lo traigo "oneLiner" por que lo tengo anidado en usersController

module.exports = router;
