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
exports.PersonaInventarioReducer = exports.initialState = void 0;
var store_1 = require("@ngrx/store");
var persona_inventario_action_1 = require("src/app/core/state/actions/persona_inventario/persona_inventario.action");
exports.initialState = {
    personaInventario: [],
    personaInventarioId: {
        id: 0,
        idinventario: {
            id: 0,
            idProducto: {
                id: 0,
                idProveedor: {
                    id: 0,
                    correo: "",
                    direccion: "",
                    telefono: ""
                },
                nombre: "",
                marca: ""
            },
            cantidad: 0,
            precio: 0,
            fecha: "",
            tipo: ''
        },
        idpersona: {
            id: 0,
            dni: "",
            nombre: "",
            apellido: "",
            correo: "",
            pais: "",
            telefono: ""
        }
    }
};
exports.PersonaInventarioReducer = store_1.createReducer(exports.initialState, store_1.on(persona_inventario_action_1.listar_success, function (state, _a) {
    var personaInventario = _a.personaInventario;
    return __assign(__assign({}, state), { personaInventario: personaInventario });
}), store_1.on(persona_inventario_action_1.listarId_success, function (state, _a) {
    var personaInventario = _a.personaInventario;
    return __assign(__assign({}, state), { personaInventarioId: personaInventario });
}));
