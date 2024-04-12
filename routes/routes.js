//Este es un archivo de ejemplo de una ruta de Node.js. Reemplazar por otro archivo con rutas reales.

import { Router } from "express";

import {
  listaDeseos,
  eliminarItemListaDeseos,
  agregarListaDeseos,
  getWishedCards
} from "../controllers/controller.js";
import { inventario, vitrina, enviar } from "../controllers/dummy.js";

//cambiar el nombre del endpoint
const router = Router();
router.post("/", listaDeseos);
router.post("/agregar", agregarListaDeseos);
router.post("/eliminar/", eliminarItemListaDeseos);
router.post("/getWishedCards", getWishedCards);
router.post("/dummy/getCard", inventario);
router.post("/dummy/prices", vitrina);
router.post("/dummy/ADD-CARD", enviar);

export default router;
