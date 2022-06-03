"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PersonaInventarioEffects = void 0;
var core_1 = require("@angular/core");
var effects_1 = require("@ngrx/effects");
var rxjs_1 = require("rxjs");
var operators_1 = require("rxjs/operators");
var personaInventarioAction = require("src/app/core/state/actions/persona_inventario/persona_inventario.action");
var PersonaInventarioEffects = /** @class */ (function () {
    function PersonaInventarioEffects(actions$, personaInventarioService) {
        var _this = this;
        this.actions$ = actions$;
        this.personaInventarioService = personaInventarioService;
        this.loadPersonaInventario$ = effects_1.createEffect(function () { return _this.actions$.pipe(effects_1.ofType(personaInventarioAction.listar), operators_1.mergeMap(function () { return _this.personaInventarioService.listarTodos()
            .pipe(operators_1.map(function (personaInventario) { return (personaInventarioAction.listar_success({ personaInventario: personaInventario })); }), operators_1.catchError(function () { return rxjs_1.EMPTY; })); })); });
        this.Add$ = effects_1.createEffect(function () { return _this.actions$.pipe(effects_1.ofType(personaInventarioAction.agregar), operators_1.mergeMap(function (_a) {
            var personaInventario = _a.personaInventario;
            return _this.personaInventarioService.agregar(personaInventario)
                .pipe(operators_1.map(function () { return (personaInventarioAction.listar()); }), operators_1.catchError(function () { return rxjs_1.EMPTY; }));
        })); });
        this.Update$ = effects_1.createEffect(function () { return _this.actions$.pipe(effects_1.ofType(personaInventarioAction.actualizar), operators_1.mergeMap(function (_a) {
            var personaInventario = _a.personaInventario;
            return _this.personaInventarioService.actualizar(personaInventario)
                .pipe(operators_1.map(function (personaInventario) { return (personaInventarioAction.listar()); }), operators_1.catchError(function () { return rxjs_1.EMPTY; }));
        })); });
        this.Delete$ = effects_1.createEffect(function () { return _this.actions$.pipe(effects_1.ofType(personaInventarioAction.eliminar), operators_1.mergeMap(function (_a) {
            var id = _a.id;
            return _this.personaInventarioService.eliminar(id)
                .pipe(operators_1.map(function () { return (personaInventarioAction.listar()); }), operators_1.catchError(function () { return rxjs_1.EMPTY; }));
        })); });
        this.id$ = effects_1.createEffect(function () { return _this.actions$.pipe(effects_1.ofType(personaInventarioAction.listarId), operators_1.mergeMap(function (_a) {
            var id = _a.id;
            return _this.personaInventarioService.listarPorId(id)
                .pipe(operators_1.map(function (personaInventario) { return (personaInventarioAction.listarId_success({ personaInventario: personaInventario })); }), operators_1.catchError(function () { return rxjs_1.EMPTY; }));
        })); });
    }
    PersonaInventarioEffects = __decorate([
        core_1.Injectable()
    ], PersonaInventarioEffects);
    return PersonaInventarioEffects;
}());
exports.PersonaInventarioEffects = PersonaInventarioEffects;
