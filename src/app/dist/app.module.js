"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var http_1 = require("@angular/common/http");
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
var animations_1 = require("@angular/platform-browser/animations");
var store_1 = require("@ngrx/store");
var store_devtools_1 = require("@ngrx/store-devtools");
var app_state_1 = require("./core/state/app.state");
var effects_1 = require("@ngrx/effects");
var empresa_effect_1 = require("./core/state/efects/empresa.effect");
var habitacion_effect_1 = require("src/app/core/state/efects/habitacion.effect");
var comentario_effect_1 = require("./core/state/efects/comentario.effect ");
var persona_effect_1 = require("./core/state/efects/persona.effect");
var reserva_effect_1 = require("./core/state/efects/reserva.effect ");
var reserva_cliente_effect_1 = require("./core/state/efects/reserva_cliente.effect ");
var descuento_effect_1 = require("./core/state/efects/descuento.effect ");
var proveedor_effect_1 = require("./core/state/efects/proveedor/proveedor.effect");
var producto_effect_1 = require("./core/state/efects/producto/producto.effect");
var inventario_effect_1 = require("./core/state/efects/inventario/inventario.effect");
var common_1 = require("@angular/common");
var persona_inventario_effect_1 = require("./core/state/efects/persona_inventario/persona_inventario.effect");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                animations_1.BrowserAnimationsModule,
                store_1.StoreModule.forRoot(app_state_1.ROOT_REDUCERS),
                store_devtools_1.StoreDevtoolsModule.instrument({}),
                effects_1.EffectsModule.forRoot([
                    empresa_effect_1.EmpresaEffects,
                    habitacion_effect_1.HabitacionEffects,
                    comentario_effect_1.ComentarioEffects,
                    persona_effect_1.PersonaEffects,
                    reserva_effect_1.ReservaEffects,
                    reserva_cliente_effect_1.Reserva_clienteEffects,
                    descuento_effect_1.DescuentoEffects,
                    proveedor_effect_1.ProveedorEffects,
                    producto_effect_1.ProductoEffects,
                    inventario_effect_1.InventarioEffects,
                    persona_inventario_effect_1.PersonaInventarioEffects
                ]),
            ],
            providers: [
                common_1.DatePipe,
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
