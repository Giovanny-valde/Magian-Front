import {
  AfterViewInit,
  Component,
  OnInit
} from '@angular/core';
import {
  Store
} from '@ngrx/store';
import {
  Observable
} from 'rxjs';
import {
  Proveedor
} from 'src/app/core/models/proveedor/proveedor';
import * as ProveedorActions from 'src/app/core/state/actions/proveedor/proveedor.action';
import {
  State
} from 'src/app/core/state/app.state';
import * as ProveedorSelectors from 'src/app/core/state/selectors/proveedor/proveedor.selector';
import {
  FormControl,
  FormGroup
} from '@angular/forms';
import * as ProductoActions from 'src/app/core/state/actions/producto/producto.action';
import * as ProductoSelectors from 'src/app/core/state/selectors/producto/producto.selector';
import { DatatableOptionsService } from '../../datatable-options.service';



@Component({
  selector: 'app-proveedor',
  templateUrl: './proveedor.component.html',
  styleUrls: ['./proveedor.component.css'],
})
export class ProveedorComponent implements OnInit{

  public proveedores$: Observable < any > = new Observable();
  public loading$: Observable < boolean > = new Observable();
  public proveedor$: Observable < any > = new Observable();
  public productos$: Observable < any > = new Observable();
  public productosProveedor: any = [];
  public errorHtml: String = "";
  public proveedorForm = new FormGroup({
    correo: new FormControl(''),
    direccion: new FormControl(''),
    telefono: new FormControl(''),
    id: new FormControl('')
  });
  public option: number = 0;
  public dtOptions: any = {};
  constructor(
    private store: Store,
    private storeState: Store < State > ,
    private datatableOptionsService : DatatableOptionsService
  ) {}
  ngOnInit(): void {
    this.dtOptions =  this.datatableOptionsService.createDatatableOptions([0,1,2,3], "Proveedores");
    this.proveedores$ = this.storeState.select(ProveedorSelectors.selectProveedorList);
    this.store.dispatch(ProveedorActions.listarProveedor());
    this.proveedor$ = this.storeState.select(ProveedorSelectors.selectProveedorId);
    this.productos$ = this.storeState.select(ProductoSelectors.selectProductoList);
    this.store.dispatch(ProductoActions.listarProducto());
  }

  public eliminarProveedor(id: number) {
    let opcion = confirm("¿Está seguro de eliminar este proveedor? Se eliminarán todos los productos asociados con él");
    if (opcion) {
      this.productos$.subscribe(productos => {
        productos.forEach((producto: any) => {
          if (producto.idProveedor.id == id) {
            this.productosProveedor.push(producto);
          }
        });
      });
      if (this.productosProveedor.length > 0) {
        this.productosProveedor.forEach((producto: any) => {
          this.store.dispatch(ProductoActions.eliminarProducto({
            id: producto.id
          }));
        });
        this.productosProveedor = [];
        opcion = confirm("Se eliminaron todos los productos asociados con él, ¿Desea eliminar el proveedor?");
        if (opcion) {
          this.store.dispatch(ProveedorActions.eliminarProveedor({
            id: id
          }));
        }
      } else {
        this.store.dispatch(ProveedorActions.eliminarProveedor({
          id: id
        }));
      }


    }
  }
  public verProveedor(proveedor: Proveedor) {
    console.log(this.store.dispatch(ProveedorActions.listarIdProveedor({
      id: proveedor.id
    })));
  }
  public agregarProveedor() {

    let correo = this.proveedorForm.get('correo') ?.value;
    let direccion = this.proveedorForm.get('direccion') ?.value;
    let telefono = this.proveedorForm.get('telefono') ?.value;
    let proveedor = new Proveedor();
    proveedor.correo = correo;
    proveedor.direccion = direccion;
    proveedor.telefono = telefono;
    if (correo === "" || direccion === "" || telefono === "") {
      this.errorHtml = "Todos los campos son obligatorios";
    } else {
      this.errorHtml = "";
      this.store.dispatch(ProveedorActions.agregarProveedor({
        proveedor: proveedor
      }));
      this.errorHtml = "Agregado correctamente";
    }
  }
  public editarProveedor() {
    let proveedor = new Proveedor();
    proveedor.correo = this.proveedorForm.get('correo') ?.value;
    proveedor.direccion = this.proveedorForm.get('direccion') ?.value;
    proveedor.telefono = this.proveedorForm.get('telefono') ?.value;
    proveedor.id = this.proveedorForm.get('id') ?.value;
    if (proveedor.correo === "" || proveedor.direccion === "" || proveedor.telefono === "") {
      this.errorHtml = "Todos los campos son obligatorios";
    } else {
      this.errorHtml = "";
      this.store.dispatch(ProveedorActions.actualizarProveedor({
        proveedor: proveedor
      }));
      this.errorHtml = "Editado correctamente";
    }
  }
  public abrirModal(option: any) {
    this.proveedorForm.reset();
    if (option == 0) {
      this.option = 0;
    } else {
      this.option = 1;
      this.proveedorForm.get('id') ?.setValue(option.id);
      this.proveedorForm.get('id') ?.disable();
      this.proveedorForm.get('correo') ?.setValue(option.correo);
      this.proveedorForm.get('direccion') ?.setValue(option.direccion);
      this.proveedorForm.get('telefono') ?.setValue(option.telefono);
    }
  }
}
