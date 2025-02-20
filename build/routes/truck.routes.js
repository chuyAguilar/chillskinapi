"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _truckController = require("../controlers/truckController.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var router = _express["default"].Router();

// POST /api/trucks/ -> Crear camión
router.post("/", _truckController.createTruck);

// GET /api/trucks/ -> Obtener todos los camiones
router.get("/", _truckController.getAllTrucks);

// GET /api/trucks/:id -> Obtener camión por ID
router.get("/:id", _truckController.getTruckById);

// PUT /api/trucks/:id -> Actualizar camión
router.put("/:id", _truckController.updateTruck);

// DELETE /api/trucks/:id -> Eliminar camión
router["delete"]("/:id", _truckController.deleteTruck);

// Activar prototipos de un camión
router.put("/:id/on", _truckController.turnOnPrototypes);

// Desactivar prototipos de un camión
router.put("/:id/off", _truckController.turnOffPrototypes);
var _default = exports["default"] = router;