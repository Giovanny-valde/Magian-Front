"use strict";
exports.__esModule = true;
exports.selectPersonaInventarioId = exports.selectPersonaInventarioList = exports.selectPersonaInventario = void 0;
var store_1 = require("@ngrx/store");
exports.selectPersonaInventario = function (state) { return state.PersonaInventario; };
exports.selectPersonaInventarioList = store_1.createSelector(exports.selectPersonaInventario, function (state) { return state.personaInventario; });
exports.selectPersonaInventarioId = store_1.createSelector(exports.selectPersonaInventario, function (state) { return state.personaInventario; });
