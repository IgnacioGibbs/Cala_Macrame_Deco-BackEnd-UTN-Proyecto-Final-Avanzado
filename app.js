// Requerimiento de módulos
const express = require("express");
const dotenv = require("dotenv");
const app = express();
const DBConnection = require("./config/DB");
const morgan = require("morgan");

dotenv.config(); // Configuracion del .env

const port = process.env.PORT_SERVER || 4500;

app.use(morgan("dev")); // Middleware para el manejo y vision solicitudes HTTP por consola

app.use(express.json({ extend: true })); // Habilito el formato JSON

// Llamado a la conexión con MongoDB

DBConnection();

// Define Controladores

const home = require("./routes/home");
const products = require("./routes/products");
const auth = require("./routes/auth");

// Define Controladores Admin

// Define las rutas FullAccess

app.use("/api", home);
app.use("/api/productos", products);
app.use("/api/auth", auth);

// Define las rutas Users

// Define las rutas Admin

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
