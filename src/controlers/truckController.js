import Truck from "../models/truck.js";
import Prot from "../models/prot.js";

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

// (1) Encender prototipos de un camión
export const turnOnPrototypes = async (req, res) => {
  console.log("=== turnOnPrototypes called ===");
  try {
    // 1. Obtenemos el ID del camión desde req.params
    const { id } = req.params;
    console.log("Param ID =>", id);

    // 2. Buscamos el camión en la base de datos
    const truck = await Truck.findById(id);
    console.log("Truck encontrado =>", truck);

    // 3. Si no existe, respondemos con 404
    if (!truck) {
      console.log("Camión no encontrado con ID =>", id);
      return res.status(404).json({ message: "Camión no encontrado" });
    }

    // 4. Encendemos (activo = true) todos los prototipos con truckId = truck._id
    console.log("Encendiendo prototipos con truckId =>", truck._id);
    const result = await Prot.updateMany({ truckId: truck._id }, { activo: true });
    
    console.log("Resultado updateMany =>", result);

    // 5. Respondemos éxito
    return res.status(200).json({
      message: "Se han encendido todos los prototipos del camión",
      updateInfo: result
    });
  } catch (error) {
    // En caso de error, mostramos en consola y mandamos en la respuesta
    console.log("Error en turnOnPrototypes =>", error);
    return res.status(500).json({ message: "Error al encender prototipos", error });
  }
};

// (2) Apagar prototipos de un camión
export const turnOffPrototypes = async (req, res) => {
  console.log("=== turnOffPrototypes called ===");
  try {
    // 1. Obtenemos el ID del camión
    const { id } = req.params;
    console.log("Param ID =>", id);

    // 2. Buscamos el camión
    const truck = await Truck.findById(id);
    console.log("Truck encontrado =>", truck);

    // 3. Si no existe, respondemos con 404
    if (!truck) {
      console.log("Camión no encontrado con ID =>", id);
      return res.status(404).json({ message: "Camión no encontrado" });
    }

    // 4. Apagamos (activo = false) todos los prototipos con truckId = truck._id
    console.log("Apagando prototipos con truckId =>", truck._id);
    const result = await Prot.updateMany({ truckId: truck._id }, { activo: false });
    
    console.log("Resultado updateMany =>", result);

    // 5. Respondemos éxito
    return res.status(200).json({
      message: "Se han apagado todos los prototipos del camión",
      updateInfo: result
    });
  } catch (error) {
    console.log("Error en turnOffPrototypes =>", error);
    return res.status(500).json({ message: "Error al apagar prototipos", error });
  }
};