const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");
const path = require("path");
const {v4: uuid} = require("uuid");
const multer = require("multer");
const uid = uuid();
const storage = multer.diskStorage({
  destination: './public/images/user', 
  filename: (req, file, cb, filename)=>{
    cb(null, uid + path.extname(file.originalname))}
});

//traer todos los users
router.get("/", usersController.getAll);
router.get("/:id", usersController.Single)
// POST DE PRUEBA PARA MONGODB

router.post("/", multer({storage: storage}).single('images') ,usersController.CreateUsers); // Lo traigo "oneLiner" por que lo tengo anidado en usersController

module.exports = router;
