import express from "express";
import {
  registerProt,        // Registrar un prototipo (asignar truckId por única vez)
  saveProtReading,      // Recibir lecturas periódicas (ESP32 cada 10 min)
  getAllProtData,       // Obtener todos los prototipos
  getProtById,          // Obtener un prototipo por ID
  updateProtData,       // Actualizar un prototipo
  deleteProtData, // Eliminar un prototipo
  getProtReadings       
} from "../controlers/protController.js";

const router = express.Router();

// 1) Registrar un prototipo (crear y asignar a un camión)
router.post("/register", registerProt);

// 2) Recibir lecturas periódicas (solo dispositivoId, temperatura, humedad)
router.post("/data", saveProtReading);

// 3) Obtener todos los prototipos
router.get("/", getAllProtData);

// 4) Obtener un prototipo por ID
router.get("/:id", getProtById);

// 5) Actualizar un prototipo (estado, activo, etc.)
router.put("/:id", updateProtData);

// 6) Eliminar un prototipo
router.delete("/:id", deleteProtData);

router.get("/:id/readings", getProtReadings);


export default router;
