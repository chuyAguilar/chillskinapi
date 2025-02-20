import express from "express";
import {
  createTruck,
  getAllTrucks,
  getTruckById,
  updateTruck,
  deleteTruck,
  toggleTruckPrototypes 

} from "../controlers/truckController.js";

const router = express.Router();

// POST /api/trucks/ -> Crear camión
router.post("/", createTruck);

// GET /api/trucks/ -> Obtener todos los camiones
router.get("/", getAllTrucks);

// GET /api/trucks/:id -> Obtener camión por ID
router.get("/:id", getTruckById);

// PUT /api/trucks/:id -> Actualizar camión
router.put("/:id", updateTruck);

// DELETE /api/trucks/:id -> Eliminar camión
router.delete("/:id", deleteTruck);

//ruta para encender/apagar prototipos
router.put("/:id/toggle-prototypes", toggleTruckPrototypes);


export default router;
