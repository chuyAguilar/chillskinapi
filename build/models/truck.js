"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var truckSchema = new _mongoose["default"].Schema({
  nombre: {
    type: String,
    required: true,
    unique: true
  },
  descripcion: {
    type: String,
    "default": ""
  },
  prototipos: [{
    type: _mongoose["default"].Schema.Types.ObjectId,
    ref: "Prot" // Referencia al modelo 'Prot'
  }]
});
var Truck = _mongoose["default"].model("Truck", truckSchema);
var _default = exports["default"] = Truck;