"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.InicioInventarioComponent = void 0;
var core_1 = require("@angular/core");
var InicioInventarioComponent = /** @class */ (function () {
    function InicioInventarioComponent() {
        this.urls = [
            {
                url: 'inventario/',
                nombre: 'Inventario',
                icono: 'fas fa-shapes',
                descripcion: 'Inventario de productos, su stock actual, fecha, tipo y precio.'
            },
            {
                url: 'productos/',
                nombre: 'Productos',
                icono: 'fa-solid fa-boxes-stacked',
                descripcion: 'Lista de productos, nombre, marca y proveedor.'
            },
            {
                url: 'proveedores/',
                nombre: 'Proveedores',
                icono: 'fa-solid fa-truck-loading',
                descripcion: 'Lista de proveedores, correo, dirección y teléfono.'
            },
            // {
            //   url:'ingresados/',
            //   nombre:'Ingresados',
            //   icono:'fa-solid fa-box-open',
            //   descripcion:'Registro de productos que entran al inventario, cantidad, precio, fecha y tipo (entrada).',
            // },
            {
                url: 'ventas/',
                nombre: 'Ventas',
                icono: 'fas fa-shopping-cart',
                descripcion: 'Lista de productos que salen del inventario o venta de productos, cantidad, precio, fecha y tipo (salida).'
            },
        ];
    }
    InicioInventarioComponent.prototype.ngOnInit = function () {
    };
    InicioInventarioComponent = __decorate([
        core_1.Component({
            selector: 'app-inicio',
            templateUrl: './inicio.component.html',
            styleUrls: ['./inicio.component.css'],
            changeDetection: core_1.ChangeDetectionStrategy.OnPush
        })
    ], InicioInventarioComponent);
    return InicioInventarioComponent;
}());
exports.InicioInventarioComponent = InicioInventarioComponent;
