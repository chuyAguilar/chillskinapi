import mongoose from "mongoose";

const truckSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    unique: true,
  },
  descripcion: {
    type: String,
    default: "",
  },
  prototipos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Prot", // Referencia al modelo 'Prot'
    },
  ],
});

const Truck = mongoose.model("Truck", truckSchema);

export default Truck;
