"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.VentaComponent = void 0;
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var forms_1 = require("@angular/forms");
var PersonaInventarioSelectors = require("src/app/core/state/selectors/persona_inventario/persona_inventario.selector");
var PersonaInventarioActions = require("src/app/core/state/actions/persona_inventario/persona_inventario.action");
var ProductoSelectors = require("src/app/core/state/selectors/producto/producto.selector");
var ProductoActions = require("src/app/core/state/actions/producto/producto.action");
var PersonaSelectors = require("src/app/core/state/selectors/persona.selector");
var PersonaActions = require("src/app/core/state/actions/persona.action");
var InventarioActions = require("src/app/core/state/actions/inventario/inventario.action");
var InventarioSelectors = require("src/app/core/state/selectors/inventario/inventario.selector");
var persoinventario_1 = require("src/app/core/models/persona_inventario/persoinventario");
var persona_1 = require("src/app/core/models/persona/persona");
var producto_1 = require("src/app/core/models/producto/producto");
var inventario_1 = require("src/app/core/models/inventario/inventario");
var VentaComponent = /** @class */ (function () {
    function VentaComponent(store, storeState, datatableOptionsService, inventarioService) {
        this.store = store;
        this.storeState = storeState;
        this.datatableOptionsService = datatableOptionsService;
        this.inventarioService = inventarioService;
        this.personaInventarios$ = new rxjs_1.Observable();
        this.personaInventario$ = new rxjs_1.Observable();
        this.producto$ = new rxjs_1.Observable();
        this.productos$ = new rxjs_1.Observable();
        this.persona$ = new rxjs_1.Observable();
        this.personas$ = new rxjs_1.Observable();
        this.inventarios$ = new rxjs_1.Observable();
        this.inventario$ = new rxjs_1.Observable();
        this.loading$ = new rxjs_1.Observable();
        this.dtOptions = {};
        this.listaVentas = [];
        this.persona = {};
        this.producto = {};
        this.inventario = {};
        this.mensaje = "";
        this.contador = 0;
        this.venta = {};
        this.ventaForm = new forms_1.FormGroup({
            idpersona: new forms_1.FormControl(''),
            idproducto: new forms_1.FormControl(''),
            cantidad: new forms_1.FormControl(''),
            precio: new forms_1.FormControl(''),
            fecha: new forms_1.FormControl('')
        });
        this.ventaEditarForm = new forms_1.FormGroup({
            id: new forms_1.FormControl(''),
            idpersona: new forms_1.FormControl(''),
            idproducto: new forms_1.FormControl(''),
            cantidad: new forms_1.FormControl(''),
            precio: new forms_1.FormControl(''),
            fecha: new forms_1.FormControl('')
        });
    }
    VentaComponent.prototype.ngOnInit = function () {
        this.dtOptions = this.datatableOptionsService.createDatatableOptions([0, 1, 2, 3, 4, 5, 6], "Ventas");
        this.personaInventarios$ = this.storeState.select(PersonaInventarioSelectors.selectPersonaInventarioList);
        this.store.dispatch(PersonaInventarioActions.listar());
        this.personaInventario$ = this.storeState.select(PersonaInventarioSelectors.selectPersonaInventarioId);
        this.producto$ = this.storeState.select(ProductoSelectors.selectProductoId);
        this.productos$ = this.storeState.select(ProductoSelectors.selectProductoList);
        this.store.dispatch(ProductoActions.listarProducto());
        this.persona$ = this.storeState.select(PersonaSelectors.selectPersonaPorId);
        this.personas$ = this.storeState.select(PersonaSelectors.selectPersonaList);
        this.store.dispatch(PersonaActions.listarPersona());
        this.inventarios$ = this.storeState.select(InventarioSelectors.selectInventarioList);
        this.inventario$ = this.storeState.select(InventarioSelectors.selectInventarioId);
        this.store.dispatch(InventarioActions.listarInventario());
    };
    VentaComponent.prototype.formatearFecha = function (fecha) {
        return new Date(fecha).toLocaleDateString();
    };
    VentaComponent.prototype.guardarVenta = function () {
        var _this = this;
        this.listaVentas.forEach(function (element) {
            var personaobj = new persona_1.persona();
            personaobj.id = element.idpersona;
            var productoobj = new producto_1.Producto();
            productoobj.id = element.idproducto;
            var inventarioobj = new inventario_1.Inventario();
            inventarioobj.cantidad = element.cantidad;
            inventarioobj.precio = element.precio;
            inventarioobj.fecha = element.fecha;
            inventarioobj.idProducto = productoobj;
            inventarioobj.tipo = 'salida';
            _this.store.dispatch(InventarioActions.agregarInventario({ inventario: inventarioobj }));
            var ultimoId = 0;
            _this.inventarioService.listarTodos().subscribe(function (data) {
                ultimoId = data[data.length - 1].id;
                var personaobj = new persona_1.persona();
                personaobj.id = element.idpersona;
                var productoobj = new producto_1.Producto();
                productoobj.id = element.idproducto;
                var inventarioobj = new inventario_1.Inventario();
                inventarioobj.cantidad = element.cantidad;
                inventarioobj.precio = element.precio;
                inventarioobj.fecha = element.fecha;
                inventarioobj.idProducto = productoobj;
                inventarioobj.tipo = 'salida';
                inventarioobj.id = ultimoId;
                var personaInventarioobj = new persoinventario_1.personaInventario();
                personaInventarioobj.idpersona = personaobj;
                personaInventarioobj.idinventario = inventarioobj;
                _this.store.dispatch(PersonaInventarioActions.agregar({ personaInventario: personaInventarioobj }));
            });
        });
        this.mensaje = "Ventas procesadas con exito";
        this.listaVentas = [];
    };
    VentaComponent.prototype.agregar = function () {
        var _a, _b, _c, _d, _e;
        if (((_a = this.ventaForm.get('idpersona')) === null || _a === void 0 ? void 0 : _a.value) == ""
            || ((_b = this.ventaForm.get('idproducto')) === null || _b === void 0 ? void 0 : _b.value) == ""
            || ((_c = this.ventaForm.get('cantidad')) === null || _c === void 0 ? void 0 : _c.value) == ""
            || ((_d = this.ventaForm.get('precio')) === null || _d === void 0 ? void 0 : _d.value) == ""
            || ((_e = this.ventaForm.get('fecha')) === null || _e === void 0 ? void 0 : _e.value) == "") {
            this.mensaje = "Todos los campos son obligatorios";
        }
        else {
            this.listaVentas.push(this.ventaForm.value);
            this.contador++;
            this.mensaje = "Venta añadida a la lista de ventas X" + this.contador;
        }
        this.ventaForm.reset();
    };
    VentaComponent.prototype.borrarDeTabla = function (index) {
        var _this = this;
        console.log(index);
        var contador = 0;
        this.listaVentas.forEach(function (element) {
            if (contador == index) {
                _this.listaVentas.splice(index, 1);
            }
            contador++;
        });
    };
    VentaComponent.prototype.verDatos = function (venta, tipo) {
        this.tipo = tipo;
        console.log(venta);
        this.persona = {
            id: venta.idpersona.id,
            dni: venta.idpersona.dni,
            nombre: venta.idpersona.nombre,
            apellido: venta.idpersona.apellido,
            telefono: venta.idpersona.telefono,
            pais: venta.idpersona.pais,
            correo: venta.idpersona.correo
        };
        this.producto = {
            id: venta.idinventario.idProducto.id,
            idProveedor: venta.idinventario.idProducto.idProveedor.correo,
            marca: venta.idinventario.idProducto.marca,
            nombre: venta.idinventario.idProducto.nombre
        };
        this.inventario = {
            id: venta.idinventario.id,
            cantidad: venta.idinventario.cantidad,
            precio: venta.idinventario.precio,
            fecha: venta.idinventario.fecha
        };
        this.venta = {
            id: venta.id
        };
        if (tipo == 2) {
            this.ventaEditarForm.setValue({
                id: venta.id,
                idpersona: this.persona.id,
                idproducto: this.producto.id,
                cantidad: this.inventario.cantidad,
                precio: this.inventario.precio,
                fecha: this.inventario.fecha
            });
        }
    };
    VentaComponent.prototype.calcularTotal = function () {
        var totalGanado = 0;
        this.personaInventarios$.forEach(function (element) {
            element.forEach(function (element2) {
                totalGanado += element2.idinventario.precio * element2.idinventario.cantidad;
            });
        });
        return totalGanado;
    };
    VentaComponent.prototype.eliminar = function (id) {
        this.store.dispatch(PersonaInventarioActions.eliminar({ id: id }));
    };
    VentaComponent.prototype.editarVenta = function () {
        var venta = this.ventaEditarForm.value;
        console.log(venta);
        this.store.dispatch(PersonaInventarioActions.actualizar({ personaInventario: this.venta }));
        this.mensaje = "Venta editada con exito";
        this.ventaEditarForm.reset();
    };
    VentaComponent = __decorate([
        core_1.Component({
            selector: 'app-venta',
            templateUrl: './venta.component.html',
            styleUrls: ['./venta.component.css']
        })
    ], VentaComponent);
    return VentaComponent;
}());
exports.VentaComponent = VentaComponent;
