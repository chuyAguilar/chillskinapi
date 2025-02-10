import Prot from "../models/prot.js";

// Guardar datos del prototipo
export const saveProtData = async (req, res) => {
  try {
    const { temperatura, humedad, dispositivoId, ubicacion, estado } = req.body;

    const newProt = new Prot({
      temperatura,
      humedad,
      dispositivoId,
      ubicacion: ubicacion || "Desconocida",
      estado: estado || "OK",
    });

    await newProt.save();
    res.status(201).json({ message: "Datos guardados correctamente", data: newProt });
  } catch (error) {
    res.status(500).json({ message: "Error al guardar datos", error });
  }
};

// Obtener todos los datos del prototipo
export const getAllProtData = async (req, res) => {
  try {
    const data = await Prot.find().sort({ hora: -1 }); // Ordenado por fecha descendente
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener los datos", error });
  }
};
