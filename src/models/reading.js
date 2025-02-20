import mongoose from "mongoose";

const readingSchema = new mongoose.Schema({
  protId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Prot", // referencia al modelo 'Prot'
    required: true,
  },
  temperatura: {
    type: Number,
    required: true,
  },
  humedad: {
    type: Number,
    required: true,
  },
  // Se almacena la fecha sin la parte de la hora
  fecha: {
    type: Date,
    required: true,
    default: function () {
      const now = new Date();
      return new Date(now.getFullYear(), now.getMonth(), now.getDate());
    },
  },
  // Se guarda la hora como string en formato "HH:MM:SS"
  hora: {
    type: String,
    required: true,
    default: function () {
      const now = new Date();
      return now.toTimeString().split(" ")[0]; // "HH:MM:SS"
    },
  },
  // Coordenadas GPS
  latitud: {
    type: Number,
    required: true,
  },
  longitud: {
    type: Number,
    required: true,
  },
});

const Reading = mongoose.model("Reading", readingSchema);
export default Reading;
