import mongoose from "mongoose";

// Definir el esquema del prototipo
const protSchema = new mongoose.Schema({
  temperatura: {
    type: Number,
    required: true,
  },
  humedad: {
    type: Number,
    required: true,
  },
  hora: {
    type: Date,
    default: Date.now, // Guarda la fecha y hora automáticamente
  },
  dispositivoId: {
    type: String,
    required: true,
  },
//   ubicacion: {
//     type: String,
//     default: "Desconocida",
//   },
  estado: {
    type: String,
    enum: ["OK", "Advertencia", "Crítico"], // Estado del sensor
    default: "OK",
  },
});

// Crear el modelo en MongoDB
const Prot = mongoose.model("Prot", protSchema);

export default Prot;
