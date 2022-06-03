"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.InventarioMasterRoutingModule = void 0;
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var inicio_component_1 = require("./inicio/inicio.component");
var inventario_master_component_1 = require("./inventario-master.component");
var inventario_component_1 = require("./inventario/inventario.component");
var producto_entrada_component_1 = require("./producto-entrada/producto-entrada.component");
var producto_component_1 = require("./producto/producto.component");
var proveedor_component_1 = require("./proveedor/proveedor.component");
var venta_component_1 = require("./venta/venta.component");
var routes = [
    {
        path: '',
        component: inventario_master_component_1.InventarioMasterComponent,
        children: [
            {
                path: '',
                component: inicio_component_1.InicioInventarioComponent
            },
            {
                path: 'proveedores',
                component: proveedor_component_1.ProveedorComponent
            },
            {
                path: 'productos',
                component: producto_component_1.ProductoComponent
            },
            {
                path: 'inventario',
                component: inventario_component_1.InventarioComponent
            },
            {
                path: 'ventas',
                component: venta_component_1.VentaComponent
            },
            {
                path: 'ingresados',
                component: producto_entrada_component_1.ProductoEntradaComponent
            },
        ]
    }
];
var InventarioMasterRoutingModule = /** @class */ (function () {
    function InventarioMasterRoutingModule() {
    }
    InventarioMasterRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forChild(routes)],
            exports: [router_1.RouterModule]
        })
    ], InventarioMasterRoutingModule);
    return InventarioMasterRoutingModule;
}());
exports.InventarioMasterRoutingModule = InventarioMasterRoutingModule;
