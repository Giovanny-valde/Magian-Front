"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
exports.InventarioReducer = exports.initialState = void 0;
var store_1 = require("@ngrx/store");
var inventario_action_1 = require("src/app/core/state/actions/inventario/inventario.action");
// ESTADO INICIAL DEL REDUCER
exports.initialState = {
    inventario: [],
    inventarioId: {
        id: 0,
        idProducto: {
            id: 0,
            nombre: "",
            marca: "",
            idProveedor: {
                id: 0,
                correo: "",
                direccion: "",
                telefono: ""
            }
        },
        cantidad: 0,
        precio: 0,
        fecha: "",
        tipo: ''
    }
};
exports.InventarioReducer = store_1.createReducer(exports.initialState, store_1.on(inventario_action_1.listarInventario_success, function (state, _a) {
    var inventarios = _a.inventarios;
    return __assign(__assign({}, state), { inventario: inventarios });
}), store_1.on(inventario_action_1.listarIdInventario_success, function (state, _a) {
    var inventario = _a.inventario;
    return __assign(__assign({}, state), { inventarioId: inventario });
}));
