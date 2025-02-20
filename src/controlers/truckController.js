import Truck from "../models/truck.js";

// Crear un camión
export const createTruck = async (req, res) => {
  try {
    const { nombre, descripcion } = req.body;

    // Verificar si ya existe un camión con el mismo nombre
    const existingTruck = await Truck.findOne({ nombre });
    if (existingTruck) {
      return res.status(400).json({ message: "Ya existe un camión con ese nombre" });
    }

    const newTruck = new Truck({ nombre, descripcion });
    await newTruck.save();

    return res.status(201).json({ message: "Camión creado exitosamente", data: newTruck });
  } catch (error) {
    return res.status(500).json({ message: "Error al crear camión", error });
  }
};

// Obtener todos los camiones
export const getAllTrucks = async (req, res) => {
  try {
    const trucks = await Truck.find().populate("prototipos");
    return res.status(200).json(trucks);
  } catch (error) {
    return res.status(500).json({ message: "Error al obtener camiones", error });
  }
};

// Obtener un camión por ID
export const getTruckById = async (req, res) => {
  try {
    const { id } = req.params;
    const truck = await Truck.findById(id).populate("prototipos");
    if (!truck) {
      return res.status(404).json({ message: "Camión no encontrado" });
    }
    return res.status(200).json(truck);
  } catch (error) {
    return res.status(500).json({ message: "Error al obtener camión", error });
  }
};

// Actualizar un camión
export const updateTruck = async (req, res) => {
  try {
    const { id } = req.params;
    const { nombre, descripcion } = req.body;

    const updatedTruck = await Truck.findByIdAndUpdate(
      id,
      { nombre, descripcion },
      { new: true }
    );

    if (!updatedTruck) {
      return res.status(404).json({ message: "Camión no encontrado" });
    }

    return res.status(200).json({ message: "Camión actualizado", data: updatedTruck });
  } catch (error) {
    return res.status(500).json({ message: "Error al actualizar camión", error });
  }
};

// Eliminar un camión
export const deleteTruck = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedTruck = await Truck.findByIdAndDelete(id);

    if (!deletedTruck) {
      return res.status(404).json({ message: "Camión no encontrado" });
    }

    return res.status(200).json({ message: "Camión eliminado" });
  } catch (error) {
    return res.status(500).json({ message: "Error al eliminar camión", error });
  }
};

// Encender o apagar todos los prototipos de un camión
export const toggleTruckPrototypes = async (req, res) => {
    try {
      const { id } = req.params;  // ID del camión
      const { activo } = req.body; // Valor booleano (true o false)
  
      // 1. Verificar si el camión existe
      const truck = await Truck.findById(id);
      if (!truck) {
        return res.status(404).json({ message: "Camión no encontrado" });
      }
  
      // 2. Actualizar todos los prototipos asociados a este camión
      await Prot.updateMany(
        { truckId: truck._id },
        { activo }
      );
  
      return res.status(200).json({
        message: `Se han ${activo ? "encendido" : "apagado"} todos los prototipos del camión`
      });
    } catch (error) {
      return res.status(500).json({ message: "Error al actualizar prototipos", error });
    }
  };
  