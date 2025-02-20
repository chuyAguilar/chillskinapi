"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _protController = require("../controlers/protController.js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var router = _express["default"].Router();

// 1) Registrar un prototipo (crear y asignar a un camión)
router.post("/register", _protController.registerProt);

// 2) Recibir lecturas periódicas (solo dispositivoId, temperatura, humedad)
router.post("/data", _protController.saveProtReading);

// 3) Obtener todos los prototipos
router.get("/", _protController.getAllProtData);

// 4) Obtener un prototipo por ID
router.get("/:id", _protController.getProtById);

// 5) Actualizar un prototipo (estado, activo, etc.)
router.put("/:id", _protController.updateProtData);

// 6) Eliminar un prototipo
router["delete"]("/:id", _protController.deleteProtData);
var _default = exports["default"] = router;