import dotenv from 'dotenv';
dotenv.config({ path: './local/.env' });

import express, { json } from 'express'
import indexRouter from './routes/index'; // Importa el enrutador principal (indexRouter) desde el archivo index.js ubicado en el directorio routes.



import session from 'express-session'; // Importa el módulo de sesiones de express
import createError from 'http-errors'; // Importa el módulo para manejar situaciones de error HTTP
import path from 'path'; // Módulo que proporciona facilidad para trabajar con rutas de archivos y directorios
import cookieParser from 'cookie-parser'; // Importa el módulo cookie-parser, que se utiliza para analizar las cookies adjuntas a las solicitudes HTTP
import logger from 'morgan'; // Importa el módulo para el registro de solicitudes HTTP (middleware de registro)
import cors from 'cors'; // Importa el módulo CORS para habilitar el intercambio de recursos entre diferentes dominios en el navegador web.


const app = express() // --> Iniciamos express
app.use(json()) 
app.disable('x-powered-by') // --> Deshabilitar el header x-powered-by


//permite conexiones de cualquier url
app.use(cors());


// configuracion middleware de sesiones
app.use(session({
  resave: false, // no guardar si no se modifica
  saveUninitialized: false, // no crea sesin hasta que algo almacene
  secret: 'shhhh, very secret'
}));


//configaron de middleware adicional para el registro, analisis de JSON, formularios y cookies
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


// enrutador principal, todo lo que llegue a la raiz sera manejado por el indexRouter
app.use('/', indexRouter);


// error 404 (no encontrado)
app.use(function(req, res, next) {
  next(createError(404));
});


// PORT
const PORT = process.env.PORT || 3000 // --> Usar la variable de entorno PORT, si no usar el port 3000

app.listen(PORT, () => {
  console.log(`Server listen on port http://localhost:${PORT}`)
})

module.exports = app;
