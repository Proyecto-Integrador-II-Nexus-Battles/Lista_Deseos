//Este es un archivo de ejemplo de una ruta de Node.js. Reemplazar por otro archivo con rutas reales.

import { Router } from "express";
import { listaDeseos } from "../../controllers/controller.js";

const router = Router();
router.get("/lista_deseos", listaDeseos);

export default router;
