"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var protSchema = new _mongoose["default"].Schema({
  temperatura: {
    type: Number,
    "default": 0 // o  null
  },
  humedad: {
    type: Number,
    "default": 0 // o  null
  },
  hora: {
    type: Date,
    "default": Date.now
  },
  dispositivoId: {
    type: String,
    required: true,
    unique: true
  },
  estado: {
    type: String,
    "enum": ["OK", "Advertencia", "Crítico"],
    "default": "OK"
  },
  truckId: {
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: "Truck",
    required: true
  },
  activo: {
    type: Boolean,
    "default": true
  }
});
var Prot = _mongoose["default"].model("Prot", protSchema);
var _default = exports["default"] = Prot;