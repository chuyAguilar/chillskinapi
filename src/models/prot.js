import mongoose from "mongoose";

const protSchema = new mongoose.Schema({
  temperatura: {
    type: Number,
    default: 0, // o  null
  },
  humedad: {
    type: Number,
    default: 0, // o  null
  },
  hora: {
    type: Date,
    default: Date.now,
  },
  dispositivoId: {
    type: String,
    required: true,
    unique: true,
  },
  estado: {
    type: String,
    enum: ["OK", "Advertencia", "Crítico"],
    default: "OK",
  },
  truckId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Truck",
    required: true,
  },
  activo: {
    type: Boolean,
    default: true,
  },
});

const Prot = mongoose.model("Prot", protSchema);

export default Prot;
