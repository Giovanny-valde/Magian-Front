"use strict";
exports.__esModule = true;
exports.ROOT_REDUCERS = void 0;
var comentario_reducer_1 = require("./reducers/comentario.reducer ");
var descuento_reducer_1 = require("./reducers/descuento.reducer");
var empresa_reducer_1 = require("./reducers/empresa.reducer");
var habitacion_reducer_1 = require("./reducers/habitacion.reducer");
var persona_reducer_1 = require("./reducers/persona.reducer");
var reserva_reducer_1 = require("./reducers/reserva.reducer");
var reserva_cliente_reducer_1 = require("./reducers/reserva_cliente.reducer");
var producto_reducer_1 = require("./reducers/producto/producto.reducer");
var proveedor_reducer_1 = require("./reducers/proveedor/proveedor.reducer");
var inventario_reducer_1 = require("./reducers/inventario/inventario.reducer");
var persona_inventario_reducer_1 = require("./reducers/persona_inventario/persona_inventario.reducer");
exports.ROOT_REDUCERS = {
    empresa: empresa_reducer_1.EmpresaReducer,
    habitacion: habitacion_reducer_1.HabitacionReducer,
    comentario: comentario_reducer_1.ComentarioReducer,
    persona: persona_reducer_1.PersonaReducer,
    reserva: reserva_reducer_1.ReservaReducer,
    reserva_cliente: reserva_cliente_reducer_1.Reserva_clienteReducer,
    descuento: descuento_reducer_1.DescuentoReducer,
    Proveedor: proveedor_reducer_1.ProveedorReducer,
    Producto: producto_reducer_1.ProductoReducer,
    Inventario: inventario_reducer_1.InventarioReducer,
    PersonaInventario: persona_inventario_reducer_1.PersonaInventarioReducer
};
