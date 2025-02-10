import express from "express";
import { saveProtData, getAllProtData } from "../controlers/protController";

const router = express.Router();

router.post("/prot", saveProtData); // Guardar datos del prototipo
router.get("/prot", getAllProtData); // Obtener datos del prototipo

export default router;
