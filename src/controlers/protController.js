import Prot from "../models/prot.js";
import Truck from "../models/truck.js";

/**
 * 1) Registrar un Prototipo
 *    - Se usa para asignar un nuevo dispositivoId a un truckId.
 *    - Sólo se hace UNA VEZ por cada prototipo físico que quieras dar de alta.
 */
export const registerProt = async (req, res) => {
  try {
    const { dispositivoId, truckId, estado } = req.body;

    // Verificar si el camión existe
    const truck = await Truck.findById(truckId);
    if (!truck) {
      return res.status(404).json({ message: "Camión no encontrado" });
    }

    // Verificar si ya existe un prototipo con este dispositivoId
    const existingProt = await Prot.findOne({ dispositivoId });
    if (existingProt) {
      return res
        .status(400)
        .json({ message: "Ya existe un prototipo con ese dispositivoId" });
    }

    // Crear el Prototipo
    const newProt = new Prot({
      dispositivoId,
      truckId,
      estado: estado || "OK",
      // Podrías inicializar temperatura, humedad en 0 o dejarlos sin asignar
      // temperatura: 0,
      // humedad: 0,
    });

    // Guardar el prototipo
    await newProt.save();

    // Añadir el prototipo al array de prototipos del camión
    truck.prototipos.push(newProt._id);
    await truck.save();

    return res.status(201).json({
      message: "Prototipo registrado correctamente",
      data: newProt,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error al registrar prototipo",
      error,
    });
  }
};

/**
 * 2) Recibir Lecturas (cada 10 minutos)
 *    - El ESP32 manda { dispositivoId, temperatura, humedad }.
 *    - NO envía truckId (el backend lo deduce).
 *    - Se actualizan los campos en el doc Prot, guardando la última lectura.
 */
export const saveProtReading = async (req, res) => {
  try {
    const { dispositivoId, temperatura, humedad } = req.body;

    // Buscar el prototipo por su dispositivoId
    const prot = await Prot.findOne({ dispositivoId });
    if (!prot) {
      return res.status(404).json({ message: "Prototipo no registrado" });
    }

    // Verificar si está activo
    if (!prot.activo) {
      return res.status(200).json({ 
        message: "Prototipo inactivo, no se guardó la lectura" 
      });
    }

    // Actualizar la lectura en el prototipo
    prot.temperatura = temperatura;
    prot.humedad = humedad;
    prot.hora = Date.now(); // Actualiza la hora a la lectura actual
    await prot.save();

    return res.status(200).json({
      message: "Lectura guardada correctamente",
      data: prot, // Retorna el prototipo actualizado
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error al guardar la lectura",
      error,
    });
  }
};

/**
 * 3) Obtener todos los prototipos
 *    - Incluye los datos del camión (nombre, descripcion) usando populate.
 */
export const getAllProtData = async (req, res) => {
  try {
    const data = await Prot.find()
      .populate("truckId", "nombre descripcion")
      .sort({ hora: -1 }); // Orden por la última lectura/hora

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({
      message: "Error al obtener los datos",
      error,
    });
  }
};

/**
 * 4) Obtener un prototipo por su ID
 */
export const getProtById = async (req, res) => {
  try {
    const { id } = req.params;
    const prot = await Prot.findById(id).populate("truckId", "nombre descripcion");
    if (!prot) {
      return res.status(404).json({ message: "Prototipo no encontrado" });
    }
    return res.status(200).json(prot);
  } catch (error) {
    return res.status(500).json({
      message: "Error al obtener prototipo",
      error,
    });
  }
};

/**
 * 5) Actualizar un prototipo
 *    - Puedes cambiar temperatura, humedad, estado, activo, etc.
 */
export const updateProtData = async (req, res) => {
  try {
    const { id } = req.params;
    const { temperatura, humedad, estado, activo } = req.body;

    const updatedProt = await Prot.findByIdAndUpdate(
      id,
      { temperatura, humedad, estado, activo },
      { new: true }
    );

    if (!updatedProt) {
      return res.status(404).json({ message: "Prototipo no encontrado" });
    }

    return res.status(200).json({
      message: "Prototipo actualizado",
      data: updatedProt,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error al actualizar prototipo",
      error,
    });
  }
};

/**
 * 6) Eliminar un prototipo
 */
export const deleteProtData = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProt = await Prot.findByIdAndDelete(id);

    if (!deletedProt) {
      return res.status(404).json({ message: "Prototipo no encontrado" });
    }

    // (Opcional) Eliminar la referencia en el camión:
    // const truck = await Truck.findById(deletedProt.truckId);
    // if (truck) {
    //   truck.prototipos.pull(deletedProt._id);
    //   await truck.save();
    // }

    return res.status(200).json({ message: "Prototipo eliminado" });
  } catch (error) {
    return res.status(500).json({
      message: "Error al eliminar prototipo",
      error,
    });
  }
};
