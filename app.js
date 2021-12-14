// Requerimiento de módulos
const express = require("express");
const dotenv = require("dotenv");
const DBConnection = require("./config/DB");
const morgan = require("morgan");
const { createRoles } = require("./config/initialSetup");
const path = require("path");
const cors = require("cors");

const app = express();
createRoles();

dotenv.config(); // Configuracion del .env

const port = process.env.PORT_SERVER || 4500;
const server = process.env.URL_SERVER || "http://localhost:";

app.use(morgan("dev")); // Middleware para el manejo y vision de solicitudes HTTP por consola

app.use(express.json({ extend: true })); // Habilito el formato JSON

app.use(cors());

const home = require("./routes/home");
const products = require("./routes/products");
const users = require("./routes/users");
const auth = require("./routes/auth");

app.use("/api", home);
app.use("/api/productos", products);
app.use("/api/users", users);
app.use("/api/auth", auth);

app.use("/uploads", express.static(path.resolve("uploads"))); // Habilito ruta publica

async function main() {
  DBConnection(); // Llamado a la conexión con MongoDB
  await app.listen(port);
  console.log(`Server listening on ${server}:${port}`);
}

main();
