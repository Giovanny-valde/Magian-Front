"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ProveedorService = void 0;
var core_1 = require("@angular/core");
var ProveedorService = /** @class */ (function () {
    function ProveedorService(http, sharedService) {
        this.http = http;
        this.sharedService = sharedService;
        this.path = this.sharedService.APIUrl + "/proveedor";
    }
    ProveedorService.prototype.listarTodos = function () {
        return this.http.get(this.path);
    };
    ProveedorService.prototype.listarPorId = function (id) {
        return this.http.get(this.path + "/" + id);
    };
    ProveedorService.prototype.agregar = function (proveedor) {
        return this.http.post(this.path, proveedor);
    };
    ProveedorService.prototype.actualizar = function (proveedor) {
        return this.http.put(this.path + '/' + proveedor.id, proveedor);
    };
    ProveedorService.prototype.eliminar = function (id) {
        return this.http["delete"](this.path + '/' + id);
    };
    ProveedorService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], ProveedorService);
    return ProveedorService;
}());
exports.ProveedorService = ProveedorService;
