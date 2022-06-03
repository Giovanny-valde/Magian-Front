"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.InventarioMasterModule = void 0;
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var angular_datatables_1 = require("angular-datatables");
var forms_1 = require("@angular/forms");
var inventario_master_routing_module_1 = require("./inventario-master-routing.module");
var inventario_master_component_1 = require("./inventario-master.component");
var inventario_navbar_component_1 = require("../menu/inventario-navbar/inventario-navbar.component");
var inicio_component_1 = require("./inicio/inicio.component");
var proveedor_component_1 = require("./proveedor/proveedor.component");
var producto_component_1 = require("./producto/producto.component");
var inventario_component_1 = require("./inventario/inventario.component");
var venta_component_1 = require("./venta/venta.component");
var producto_entrada_component_1 = require("./producto-entrada/producto-entrada.component");
var ngx_echarts_1 = require("ngx-echarts");
var reportes_component_1 = require("./reportes/reportes.component");
var tabs_1 = require("mdb-angular-ui-kit/tabs");
var InventarioMasterModule = /** @class */ (function () {
    function InventarioMasterModule() {
    }
    InventarioMasterModule = __decorate([
        core_1.NgModule({
            declarations: [
                inventario_master_component_1.InventarioMasterComponent,
                inventario_navbar_component_1.InventarioNavbarComponent,
                proveedor_component_1.ProveedorComponent,
                inicio_component_1.InicioInventarioComponent,
                producto_component_1.ProductoComponent,
                inventario_component_1.InventarioComponent,
                venta_component_1.VentaComponent,
                producto_entrada_component_1.ProductoEntradaComponent,
                reportes_component_1.ReportesComponent
            ],
            imports: [
                common_1.CommonModule,
                inventario_master_routing_module_1.InventarioMasterRoutingModule,
                forms_1.ReactiveFormsModule,
                angular_datatables_1.DataTablesModule,
                ngx_echarts_1.NgxEchartsModule.forRoot({
                    echarts: function () { return Promise.resolve().then(function () { return require('echarts'); }); }
                }),
                tabs_1.MdbTabsModule
            ],
            exports: [
                angular_datatables_1.DataTablesModule
            ]
        })
    ], InventarioMasterModule);
    return InventarioMasterModule;
}());
exports.InventarioMasterModule = InventarioMasterModule;
