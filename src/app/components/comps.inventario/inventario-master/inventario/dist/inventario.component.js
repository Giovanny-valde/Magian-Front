"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.InventarioComponent = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var inventario_1 = require("src/app/core/models/inventario/inventario");
var inventarioAction = require("src/app/core/state/actions/inventario/inventario.action");
var inventarioSelector = require("src/app/core/state/selectors/inventario/inventario.selector");
var forms_1 = require("@angular/forms");
var productoSelector = require("src/app/core/state/selectors/producto/producto.selector");
var productoAction = require("src/app/core/state/actions/producto/producto.action");
var producto_1 = require("src/app/core/models/producto/producto");
var InventarioComponent = /** @class */ (function () {
    function InventarioComponent(store, storeState, datatableOptionsService) {
        this.store = store;
        this.storeState = storeState;
        this.datatableOptionsService = datatableOptionsService;
        this.inventarios$ = new rxjs_1.Observable();
        this.productos$ = new rxjs_1.Observable();
        this.loading$ = new rxjs_1.Observable();
        this.productoActual = {};
        this.tipo = '';
        this.tipos = ['entrada', 'salida'];
        this.inventarioActual = {};
        this.mensaje = {
            texto: '',
            "class": ''
        };
        this.inventarioForm = new forms_1.FormGroup({
            cantidad: new forms_1.FormControl(''),
            precio: new forms_1.FormControl(''),
            fecha: new forms_1.FormControl(''),
            tipoInventario: new forms_1.FormControl(''),
            idProducto: new forms_1.FormControl(''),
            id: new forms_1.FormControl('')
        });
        this.dtOptions = {};
    }
    InventarioComponent.prototype.ngOnInit = function () {
        this.dtOptions = this.datatableOptionsService.createDatatableOptions([0, 1, 2, 3, 4, 5, 6], 'inventario');
        this.inventarios$ = this.storeState.select(inventarioSelector.selectInventarioList);
        this.store.dispatch(inventarioAction.listarInventario());
        this.productos$ = this.storeState.select(productoSelector.selectProductoList);
        this.store.dispatch(productoAction.listarProducto());
    };
    InventarioComponent.prototype.conseguirInputs = function () {
        var producto = new producto_1.Producto();
        producto.id = this.inventarioForm.value.idProducto;
        var inventario = new inventario_1.Inventario();
        inventario.id = this.inventarioForm.value.id;
        inventario.cantidad = this.inventarioForm.value.cantidad;
        inventario.precio = this.inventarioForm.value.precio;
        inventario.fecha = this.inventarioForm.value.fecha;
        inventario.tipo = this.inventarioForm.value.tipoInventario;
        inventario.idProducto = producto;
        return inventario;
    };
    InventarioComponent.prototype.parseInt = function (value) {
        if (value == null) {
            return 0;
        }
        return parseInt(value);
    };
    InventarioComponent.prototype.formatearFecha = function (fecha) {
        return new Date(fecha).toLocaleDateString();
    };
    InventarioComponent.prototype.verProducto = function (producto) {
        this.productoActual = JSON.parse(JSON.stringify(producto));
        this.tipo = 'verProducto';
    };
    InventarioComponent.prototype.abrirModal = function (inventario, tipo) {
        this.mensaje = {
            texto: ' ',
            "class": ' '
        };
        this.inventarioForm.reset();
        this.inventarioActual = JSON.parse(JSON.stringify(inventario));
        this.inventarioForm.reset();
        this.tipo = tipo;
        if (this.tipo == 'editarInventario' || this.tipo == 'eliminarInventario') {
            if (this.tipo == 'editarInventario') {
                this.inventarioForm.setValue({
                    cantidad: inventario.cantidad,
                    precio: inventario.precio,
                    fecha: inventario.fecha,
                    tipoInventario: inventario.tipo,
                    idProducto: inventario.idProducto.id,
                    id: inventario.id
                });
            }
        }
    };
    InventarioComponent.prototype.camposValidados = function (inventario) {
        var valido = true;
        var mensaje = '';
        if (inventario.cantidad == '' ||
            inventario.cantidad == undefined ||
            inventario.cantidad == null) {
            valido = false;
            mensaje += 'La cantidad no puede estar vacia\n';
        }
        if (inventario.precio == '' ||
            inventario.precio == undefined ||
            inventario.precio == null) {
            valido = false;
            mensaje += 'El precio no puede estar vacio\n';
        }
        if (inventario.fecha == '' ||
            inventario.fecha == undefined ||
            inventario.fecha == null) {
            valido = false;
            mensaje += 'La fecha no puede estar vacia\n';
        }
        if (inventario.tipo == '' ||
            inventario.tipo == undefined ||
            inventario.tipo == null) {
            valido = false;
            mensaje += 'El tipo no puede estar vacio\n';
        }
        if (inventario.idProducto == '' ||
            inventario.idProducto == undefined ||
            inventario.idProducto == null) {
            valido = false;
            mensaje += 'El producto no puede estar vacio\n';
        }
        return {
            valido: valido,
            mensaje: mensaje
        };
    };
    InventarioComponent.prototype.crearInventario = function () {
        var inventario = this.conseguirInputs();
        console.log(inventario);
        var valido = this.camposValidados(inventario);
        if (valido.valido == true) {
            try {
                this.store.dispatch(inventarioAction.agregarInventario({
                    inventario: inventario
                }));
            }
            catch (error) {
                console.log(error);
            }
            this.inventarioForm.reset();
            this.mensaje = {
                texto: 'Se ha agregado el inventario',
                "class": 'text-success'
            };
        }
        else {
            this.mensaje.texto = valido.mensaje;
            this.mensaje["class"] = 'text-danger';
        }
    };
    InventarioComponent.prototype.editarInventario = function () {
        var inventario = this.conseguirInputs();
        console.log(inventario);
        var valido = this.camposValidados(inventario);
        if (valido.valido == true) {
            try {
                this.store.dispatch(inventarioAction.actualizarInventario({
                    inventario: inventario
                }));
            }
            catch (error) {
                console.log(error);
            }
            this.inventarioForm.reset();
            this.mensaje = {
                texto: 'Se ha editado el inventario',
                "class": 'text-success'
            };
        }
        else {
            this.mensaje.texto = valido.mensaje;
            this.mensaje["class"] = 'text-danger';
        }
    };
    InventarioComponent.prototype.eliminarInventario = function () {
        try {
            this.store.dispatch(inventarioAction.eliminarInventario({
                id: this.inventarioActual.id
            }));
            this.mensaje = {
                texto: 'Se eliminó el inventario',
                "class": 'text-success'
            };
        }
        catch (e) {
            this.mensaje = {
                texto: 'No se pudo eliminar el inventario',
                "class": 'text-danger'
            };
        }
    };
    InventarioComponent.prototype.calcularTotal = function () {
        var totalGanado = 0;
        var totalPerdido = 0;
        this.inventarios$.forEach(function (inventario) {
            inventario.forEach(function (inventarios) {
                if (inventarios.tipo == 'salida') {
                    totalGanado += inventarios.cantidad * inventarios.precio;
                }
                else {
                    totalPerdido -= inventarios.cantidad * inventarios.precio;
                }
            });
        });
        return [totalGanado, totalPerdido];
    };
    InventarioComponent = __decorate([
        core_1.Component({
            selector: 'app-inventario',
            templateUrl: './inventario.component.html',
            styleUrls: ['./inventario.component.css']
        })
    ], InventarioComponent);
    return InventarioComponent;
}());
exports.InventarioComponent = InventarioComponent;
