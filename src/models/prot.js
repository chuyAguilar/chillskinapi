import mongoose from "mongoose";

const protSchema = new mongoose.Schema({

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
