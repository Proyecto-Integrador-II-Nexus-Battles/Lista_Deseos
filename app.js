import express, { json } from "express";

import router from "./routes/routes.js";
import createError from "http-errors"; // Importa el módulo para manejar situaciones de error HTTP
import cors from "cors"; // Importa el módulo CORS para habilitar el intercambio de recursos entre diferentes dominios en el navegador web.
import fs from "fs";
import http from "http";
import https from "https";

export const app = express(); // --> Iniciamos express
app.use(json());
app.disable("x-powered-by"); // --> Deshabilitar el header x-powered-by

//permite conexiones de cualquier url
app.use(cors());

//configaron de middleware adicional para el registro, analisis de JSON, formularios y cookies
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// enrutador principal, todo lo que llegue a la raiz sera manejado por el indexRouter
app.use("/deseos", router);

// error 404 (no encontrado)
app.use(function (req, res, next) {
  next(createError(404));
});

const options = {
  key: fs.readFileSync("certs/privkey.pem"),
  cert: fs.readFileSync("certs/cert.pem"),
};

// PORT
const PORT = process.env.PORT || 3000; // --> Usar la variable de entorno PORT, si no usar el port 3000

http.createServer(app).listen(80);
https.createServer(options, app).listen(PORT);
console.log("Server on port", PORT);
