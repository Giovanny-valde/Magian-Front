import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { Inventario } from 'src/app/core/models/inventario/inventario';
import * as inventarioAction from 'src/app/core/state/actions/inventario/inventario.action';
import { State } from 'src/app/core/state/app.state';
import * as inventarioSelector from 'src/app/core/state/selectors/inventario/inventario.selector';
import { FormControl, FormGroup } from '@angular/forms';
import * as productoSelector from 'src/app/core/state/selectors/producto/producto.selector';
import * as productoAction from 'src/app/core/state/actions/producto/producto.action';
import { Producto } from 'src/app/core/models/producto/producto';
import { DatatableOptionsService } from '../../datatable-options.service';


@Component({
	selector: 'app-inventario',
	templateUrl: './inventario.component.html',
	styleUrls: ['./inventario.component.css'],
})
export class InventarioComponent implements OnInit {
	public inventarios$: Observable<any> = new Observable();
	public productos$: Observable<any> = new Observable();
	public loading$: Observable<boolean> = new Observable();
	public productoActual: any = {};
	public tipo: string = '';
	public tipos: any[] = ['entrada', 'salida'];
	public inventarioActual: any = {};
	public mensaje: any = {
		texto: '',
		class: '',
	};
	public inventarioForm = new FormGroup({
		cantidad: new FormControl(''),
		precio: new FormControl(''),
		fecha: new FormControl(''),
		tipoInventario: new FormControl(''),
		idProducto: new FormControl(''),
		id: new FormControl(''),
	});
  public dtOptions:any={};
	constructor(private store: Store, private storeState: Store<State>, private datatableOptionsService: DatatableOptionsService) { }

	ngOnInit() {
    this.dtOptions = this.datatableOptionsService.createDatatableOptions([0,1,2,3,4,5,6], 'inventario');
		this.inventarios$ = this.storeState.select(
			inventarioSelector.selectInventarioList
		);
		this.store.dispatch(inventarioAction.listarInventario());
		this.productos$ = this.storeState.select(
			productoSelector.selectProductoList
		);
		this.store.dispatch(productoAction.listarProducto());
	}

	public conseguirInputs() {
		let producto = new Producto();
		producto.id = this.inventarioForm.value.idProducto;
		let inventario = new Inventario();
		inventario.id = this.inventarioForm.value.id;
		inventario.cantidad = this.inventarioForm.value.cantidad;
		inventario.precio = this.inventarioForm.value.precio;
		inventario.fecha = this.inventarioForm.value.fecha;
		inventario.tipo = this.inventarioForm.value.tipoInventario;
		inventario.idProducto = producto;
		return inventario;
	}

  public parseInt(value: any) {
    if (value == null) {
      return 0;
    }
    return parseInt(value);
  }

	public formatearFecha(fecha: any) {
		return new Date(fecha).toLocaleDateString();
	}
	public verProducto(producto: any) {
		this.productoActual = JSON.parse(JSON.stringify(producto));
		this.tipo = 'verProducto';
	}
	public abrirModal(inventario: any, tipo: any) {
		this.mensaje = {
			texto: ' ',
			class: ' ',
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
					id: inventario.id,
				});
			}
		}
	}
	public camposValidados(inventario: any): any {
		let valido: boolean = true;
		let mensaje: string = '';
		if (
			inventario.cantidad == '' ||
			inventario.cantidad == undefined ||
			inventario.cantidad == null
		) {
			valido = false;
			mensaje += 'La cantidad no puede estar vacia\n';
		}
		if (
			inventario.precio == '' ||
			inventario.precio == undefined ||
			inventario.precio == null
		) {
			valido = false;
			mensaje += 'El precio no puede estar vacio\n';
		}
		if (
			inventario.fecha == '' ||
			inventario.fecha == undefined ||
			inventario.fecha == null
		) {
			valido = false;
			mensaje += 'La fecha no puede estar vacia\n';
		}
		if (
			inventario.tipo == '' ||
			inventario.tipo == undefined ||
			inventario.tipo == null
		) {
			valido = false;
			mensaje += 'El tipo no puede estar vacio\n';
		}
		if (
			inventario.idProducto == '' ||
			inventario.idProducto == undefined ||
			inventario.idProducto == null
		) {
			valido = false;
			mensaje += 'El producto no puede estar vacio\n';
		}
		return {
			valido,
			mensaje,
		};
	}
	public crearInventario() {
		let inventario = this.conseguirInputs();
		console.log(inventario);
		let valido = this.camposValidados(inventario);
		if (valido.valido == true) {
			try {
				this.store.dispatch(
					inventarioAction.agregarInventario({
						inventario: inventario,
					})
				);
			} catch (error) {
				console.log(error);
			}
			this.inventarioForm.reset();
			this.mensaje = {
				texto: 'Se ha agregado el inventario',
				class: 'text-success',
			};
		} else {
			this.mensaje.texto = valido.mensaje;
			this.mensaje.class = 'text-danger';
		}
	}
	public editarInventario() {
		let inventario = this.conseguirInputs();
		console.log(inventario);
		let valido = this.camposValidados(inventario);
		if (valido.valido == true) {
			try {
				this.store.dispatch(
					inventarioAction.actualizarInventario({
						inventario: inventario,
					})
				);
			} catch (error) {
				console.log(error);
			}
			this.inventarioForm.reset();
			this.mensaje = {
				texto: 'Se ha editado el inventario',
				class: 'text-success',
			};
		} else {
			this.mensaje.texto = valido.mensaje;
			this.mensaje.class = 'text-danger';
		}
	}
	public eliminarInventario() {
		try {
			this.store.dispatch(
				inventarioAction.eliminarInventario({
					id: this.inventarioActual.id,
				})
			);
			this.mensaje = {
				texto: 'Se eliminó el inventario',
				class: 'text-success',
			};
		} catch (e) {
			this.mensaje = {
				texto: 'No se pudo eliminar el inventario',
				class: 'text-danger',
			};
		}
	}
  public calcularTotal() {
    let totalGanado = 0;
    let totalPerdido=0;
    this.inventarios$.forEach(inventario => {
      inventario.forEach((inventarios:any) => {

        if(inventarios.tipo=='salida'){
          totalGanado += inventarios.cantidad * inventarios.precio;
        }else{
          totalPerdido -= inventarios.cantidad * inventarios.precio;
        }
      })
    })
    return [totalGanado,totalPerdido];
  }
}
