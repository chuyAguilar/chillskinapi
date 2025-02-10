import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import protRoutes from "../src/routes/prot.routes";

dotenv.config();

const app = express();
app.use(express.json()); // Habilitar JSON en las peticiones

// Conectar a MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("🟢 Conectado a MongoDB Atlas"))
  .catch((error) => console.error("🔴 Error al conectar a MongoDB:", error));

// Usar rutas
app.use("/api", protRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, "0.0.0.0", () => {  // Permite conexiones externas
  console.log(`🚀 Servidor corriendo en http://192.168.1.81:${PORT}`);
});

