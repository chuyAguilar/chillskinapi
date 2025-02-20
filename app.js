import express from "express";
import cors from "cors";
import truckRoutes from "./src/routes/truck.routes.js";
import protRoutes from "./src/routes/prot.routes.js";

const app = express();

// Middlewares
app.use(cors());       // Permite acceso desde el Frontend
app.use(express.json()); // Habilita el parseo JSON en requests

// Rutas
app.use("/api/trucks", truckRoutes);
app.use("/api/prots", protRoutes);

// Ruta base de prueba
app.get("/", (req, res) => {
  res.send("ChillSkin API funcionando");
});

export default app;
