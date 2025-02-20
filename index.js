import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app.js";

dotenv.config();

const PORT = process.env.PORT || 3000;

// Conectar a MongoDB
mongoose
.connect(process.env.MONGO_URI)
.then(() => console.log("🟢 Conectado a MongoDB Atlas"))
.catch((error) => console.error("🔴 Error al conectar a MongoDB:", error));

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});

