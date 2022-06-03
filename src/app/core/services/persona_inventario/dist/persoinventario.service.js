"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PersonaInventarioService = void 0;
var core_1 = require("@angular/core");
var PersonaInventarioService = /** @class */ (function () {
    function PersonaInventarioService(http, sharedService) {
        this.http = http;
        this.sharedService = sharedService;
        this.path = this.sharedService.APIUrl + '/personainventario';
    }
    PersonaInventarioService.prototype.listarTodos = function () {
        return this.http.get(this.path);
    };
    PersonaInventarioService.prototype.listarPorId = function (id) {
        return this.http.get(this.path + '/' + id);
    };
    PersonaInventarioService.prototype.agregar = function (personaInventario) {
        return this.http.post(this.path, personaInventario);
    };
    PersonaInventarioService.prototype.actualizar = function (personaInventario) {
        return this.http.put(this.path + '/' + personaInventario.id, personaInventario);
    };
    PersonaInventarioService.prototype.eliminar = function (id) {
        return this.http["delete"](this.path + '/' + id);
    };
    PersonaInventarioService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], PersonaInventarioService);
    return PersonaInventarioService;
}());
exports.PersonaInventarioService = PersonaInventarioService;
