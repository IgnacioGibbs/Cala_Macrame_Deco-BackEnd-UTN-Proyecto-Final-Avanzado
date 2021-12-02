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

app.use(express.static(path.join(__dirname, public))); // Habilito ruta publica

DBConnection(); // Llamado a la conexión con MongoDB

const home = require("./routes/home");
const products = require("./routes/products");
const auth = require("./routes/auth");

app.use("/api", home);
app.use("/api/productos", products);
app.use("/api/auth", auth);

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
