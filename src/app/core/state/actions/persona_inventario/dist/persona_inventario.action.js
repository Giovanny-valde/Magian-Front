"use strict";
exports.__esModule = true;
exports.eliminar = exports.actualizar = exports.agregar = exports.listarId_success = exports.listarId = exports.listar_success = exports.listar = void 0;
var store_1 = require("@ngrx/store");
//LISTAR
exports.listar = store_1.createAction('[cargando ] cargar persona_inventario');
exports.listar_success = store_1.createAction('[persona_inventarios] persona_inventarios cargados', store_1.props());
//LISTAR POR ID
exports.listarId = store_1.createAction('[cargando ] cargar persona inventario por id', store_1.props());
exports.listarId_success = store_1.createAction('[persona_inventarios] persona inventario por id', store_1.props());
//AGREGAR
exports.agregar = store_1.createAction('[agregar] agregar persona inventario', store_1.props());
//ACTUALIZAR
exports.actualizar = store_1.createAction('[actualizar] actualizar persona inventario', store_1.props());
//ELIMINAR
exports.eliminar = store_1.createAction('[eliminar] eliminar persona inventario', store_1.props());
