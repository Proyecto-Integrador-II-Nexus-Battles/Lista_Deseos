//Este es un archivo de ejemplo de una ruta de Node.js. Reemplazar por otro archivo con rutas reales.

import { Router } from "express";

import { listaDeseos, eliminarItemListaDeseos } from "../controllers/controller.js";
import { inventario, vitrina } from "../controllers/dummy.js";


//cambiar el nombre del endpoint
const router = Router();
router.post("/lista_deseos", listaDeseos);
router.post("/lista_deseos/eliminar/:itemid", eliminarItemListaDeseos);
router.post("/dummy/getCard", inventario);
router.post("/dummy/prices", vitrina);

export default router;
