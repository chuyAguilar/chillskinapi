import express from "express";
import {
  createTruck,
  getAllTrucks,
  getTruckById,
  updateTruck,
  deleteTruck,
  turnOnPrototypes,
  turnOffPrototypes, 

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

// Activar prototipos de un camión
router.put("/:id/on", turnOnPrototypes);

// Desactivar prototipos de un camión
router.put("/:id/off", turnOffPrototypes);

export default router;
