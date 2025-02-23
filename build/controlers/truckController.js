"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateTruck = exports.turnOnPrototypes = exports.turnOffPrototypes = exports.getTruckById = exports.getAllTrucks = exports.deleteTruck = exports.createTruck = void 0;
var _truck = _interopRequireDefault(require("../models/truck.js"));
var _prot = _interopRequireDefault(require("../models/prot.js"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
// Crear un camión
var createTruck = exports.createTruck = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var _req$body, nombre, descripcion, existingTruck, newTruck;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, nombre = _req$body.nombre, descripcion = _req$body.descripcion; // Verificar si ya existe un camión con el mismo nombre
          _context.next = 4;
          return _truck["default"].findOne({
            nombre: nombre
          });
        case 4:
          existingTruck = _context.sent;
          if (!existingTruck) {
            _context.next = 7;
            break;
          }
          return _context.abrupt("return", res.status(400).json({
            message: "Ya existe un camión con ese nombre"
          }));
        case 7:
          newTruck = new _truck["default"]({
            nombre: nombre,
            descripcion: descripcion
          });
          _context.next = 10;
          return newTruck.save();
        case 10:
          return _context.abrupt("return", res.status(201).json({
            message: "Camión creado exitosamente",
            data: newTruck
          }));
        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", res.status(500).json({
            message: "Error al crear camión",
            error: _context.t0
          }));
        case 16:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 13]]);
  }));
  return function createTruck(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

// Obtener todos los camiones
var getAllTrucks = exports.getAllTrucks = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var trucks;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return _truck["default"].find().populate("prototipos");
        case 3:
          trucks = _context2.sent;
          return _context2.abrupt("return", res.status(200).json(trucks));
        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", res.status(500).json({
            message: "Error al obtener camiones",
            error: _context2.t0
          }));
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return function getAllTrucks(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

// Obtener un camión por ID
var getTruckById = exports.getTruckById = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var id, truck;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          id = req.params.id;
          _context3.next = 4;
          return _truck["default"].findById(id).populate("prototipos");
        case 4:
          truck = _context3.sent;
          if (truck) {
            _context3.next = 7;
            break;
          }
          return _context3.abrupt("return", res.status(404).json({
            message: "Camión no encontrado"
          }));
        case 7:
          return _context3.abrupt("return", res.status(200).json(truck));
        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](0);
          return _context3.abrupt("return", res.status(500).json({
            message: "Error al obtener camión",
            error: _context3.t0
          }));
        case 13:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 10]]);
  }));
  return function getTruckById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

// Actualizar un camión
var updateTruck = exports.updateTruck = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var id, _req$body2, nombre, descripcion, updatedTruck;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          id = req.params.id;
          _req$body2 = req.body, nombre = _req$body2.nombre, descripcion = _req$body2.descripcion;
          _context4.next = 5;
          return _truck["default"].findByIdAndUpdate(id, {
            nombre: nombre,
            descripcion: descripcion
          }, {
            "new": true
          });
        case 5:
          updatedTruck = _context4.sent;
          if (updatedTruck) {
            _context4.next = 8;
            break;
          }
          return _context4.abrupt("return", res.status(404).json({
            message: "Camión no encontrado"
          }));
        case 8:
          return _context4.abrupt("return", res.status(200).json({
            message: "Camión actualizado",
            data: updatedTruck
          }));
        case 11:
          _context4.prev = 11;
          _context4.t0 = _context4["catch"](0);
          return _context4.abrupt("return", res.status(500).json({
            message: "Error al actualizar camión",
            error: _context4.t0
          }));
        case 14:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 11]]);
  }));
  return function updateTruck(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

// Eliminar un camión
var deleteTruck = exports.deleteTruck = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var id, deletedTruck;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          id = req.params.id;
          _context5.next = 4;
          return _truck["default"].findByIdAndDelete(id);
        case 4:
          deletedTruck = _context5.sent;
          if (deletedTruck) {
            _context5.next = 7;
            break;
          }
          return _context5.abrupt("return", res.status(404).json({
            message: "Camión no encontrado"
          }));
        case 7:
          return _context5.abrupt("return", res.status(200).json({
            message: "Camión eliminado"
          }));
        case 10:
          _context5.prev = 10;
          _context5.t0 = _context5["catch"](0);
          return _context5.abrupt("return", res.status(500).json({
            message: "Error al eliminar camión",
            error: _context5.t0
          }));
        case 13:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 10]]);
  }));
  return function deleteTruck(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

// (1) Encender prototipos de un camión
var turnOnPrototypes = exports.turnOnPrototypes = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var id, truck, result;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          console.log("=== turnOnPrototypes called ===");
          _context6.prev = 1;
          // 1. Obtenemos el ID del camión desde req.params
          id = req.params.id;
          console.log("Param ID =>", id);

          // 2. Buscamos el camión en la base de datos
          _context6.next = 6;
          return _truck["default"].findById(id);
        case 6:
          truck = _context6.sent;
          console.log("Truck encontrado =>", truck);

          // 3. Si no existe, respondemos con 404
          if (truck) {
            _context6.next = 11;
            break;
          }
          console.log("Camión no encontrado con ID =>", id);
          return _context6.abrupt("return", res.status(404).json({
            message: "Camión no encontrado"
          }));
        case 11:
          // 4. Encendemos (activo = true) todos los prototipos con truckId = truck._id
          console.log("Encendiendo prototipos con truckId =>", truck._id);
          _context6.next = 14;
          return _prot["default"].updateMany({
            truckId: truck._id
          }, {
            activo: true
          });
        case 14:
          result = _context6.sent;
          console.log("Resultado updateMany =>", result);

          // 5. Respondemos éxito
          return _context6.abrupt("return", res.status(200).json({
            message: "Se han encendido todos los prototipos del camión",
            updateInfo: result
          }));
        case 19:
          _context6.prev = 19;
          _context6.t0 = _context6["catch"](1);
          // En caso de error, mostramos en consola y mandamos en la respuesta
          console.log("Error en turnOnPrototypes =>", _context6.t0);
          return _context6.abrupt("return", res.status(500).json({
            message: "Error al encender prototipos",
            error: _context6.t0
          }));
        case 23:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[1, 19]]);
  }));
  return function turnOnPrototypes(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

// (2) Apagar prototipos de un camión
var turnOffPrototypes = exports.turnOffPrototypes = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var id, truck, result;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          console.log("=== turnOffPrototypes called ===");
          _context7.prev = 1;
          // 1. Obtenemos el ID del camión
          id = req.params.id;
          console.log("Param ID =>", id);

          // 2. Buscamos el camión
          _context7.next = 6;
          return _truck["default"].findById(id);
        case 6:
          truck = _context7.sent;
          console.log("Truck encontrado =>", truck);

          // 3. Si no existe, respondemos con 404
          if (truck) {
            _context7.next = 11;
            break;
          }
          console.log("Camión no encontrado con ID =>", id);
          return _context7.abrupt("return", res.status(404).json({
            message: "Camión no encontrado"
          }));
        case 11:
          // 4. Apagamos (activo = false) todos los prototipos con truckId = truck._id
          console.log("Apagando prototipos con truckId =>", truck._id);
          _context7.next = 14;
          return _prot["default"].updateMany({
            truckId: truck._id
          }, {
            activo: false
          });
        case 14:
          result = _context7.sent;
          console.log("Resultado updateMany =>", result);

          // 5. Respondemos éxito
          return _context7.abrupt("return", res.status(200).json({
            message: "Se han apagado todos los prototipos del camión",
            updateInfo: result
          }));
        case 19:
          _context7.prev = 19;
          _context7.t0 = _context7["catch"](1);
          console.log("Error en turnOffPrototypes =>", _context7.t0);
          return _context7.abrupt("return", res.status(500).json({
            message: "Error al apagar prototipos",
            error: _context7.t0
          }));
        case 23:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[1, 19]]);
  }));
  return function turnOffPrototypes(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();