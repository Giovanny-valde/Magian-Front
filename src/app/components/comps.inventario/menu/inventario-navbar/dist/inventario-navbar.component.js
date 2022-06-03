"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.InventarioNavbarComponent = void 0;
var core_1 = require("@angular/core");
var InventarioNavbarComponent = /** @class */ (function () {
    function InventarioNavbarComponent() {
        this.inventarioLinks = [
            {
                label: 'Inicio',
                link: './',
                icon: 'fa-solid fa-home'
            },
            {
                label: 'Inventario',
                link: 'inventario/',
                icon: 'fa-solid fa-shapes'
            },
            {
                label: 'Productos',
                link: 'productos/',
                icon: 'fa-solid fa-boxes-stacked'
            },
            {
                label: 'Proveedores',
                link: 'proveedores/',
                icon: 'fa-solid fa-truck-loading'
            },
            // {
            //   label: 'Ingresados',
            //   link: 'ingresados/',
            //   icon: 'fa-solid fa-box-open',
            // },
            {
                label: 'Ventas',
                link: 'ventas/',
                icon: 'fa-solid fa-shopping-cart'
            },
        ];
    }
    InventarioNavbarComponent.prototype.ngOnInit = function () {
    };
    InventarioNavbarComponent = __decorate([
        core_1.Component({
            selector: 'app-inventario-navbar',
            templateUrl: './inventario-navbar.component.html',
            styleUrls: ['./inventario-navbar.component.css']
        })
    ], InventarioNavbarComponent);
    return InventarioNavbarComponent;
}());
exports.InventarioNavbarComponent = InventarioNavbarComponent;
