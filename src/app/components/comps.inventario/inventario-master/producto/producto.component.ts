import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { Producto } from 'src/app/core/models/producto/producto';
import { Proveedor } from 'src/app/core/models/proveedor/proveedor';
import * as productoAction from 'src/app/core/state/actions/producto/producto.action';
import { State } from 'src/app/core/state/app.state';
import * as productoSelectors from 'src/app/core/state/selectors/producto/producto.selector';
import * as proveedorSelectors from 'src/app/core/state/selectors/proveedor/proveedor.selector';
import * as proveedorAction from 'src/app/core/state/actions/proveedor/proveedor.action';
import { DatatableOptionsService } from '../../datatable-options.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  public productos$ : Observable<any> = new Observable();
  public loading$ : Observable<boolean> = new Observable() ;
  public producto$ : Observable<any> = new Observable();
  public proveedores$: Observable<any> = new Observable();
  public proveedor: any = {};
  public productosPorProveedor: any = [];
  public productoForm = new FormGroup({
    nombre: new FormControl(''),
    marca: new FormControl(''),
    proveedor_id: new FormControl(''),
    id: new FormControl('')
  });
  public errorHtml:string="";
  public tipoModal:string = "";
  public dtOptions:any;

  public closed:boolean=true;
  constructor(
    private store: Store,
    private storeState: Store<State>,
    private datatableOptions: DatatableOptionsService
  ) { }

  ngOnInit(): void {
    this.dtOptions = this.datatableOptions.createDatatableOptions([0,1,2,3], "producto");
    this.productos$ = this.storeState.select(productoSelectors.selectProductoList);
    this.store.dispatch(productoAction.listarProducto());
    this.producto$ = this.storeState.select(productoSelectors.selectProductoId);
    this.proveedores$ = this.storeState.select(proveedorSelectors.selectProveedorList);
    this.store.dispatch(proveedorAction.listarProveedor());
  }

  public verProveedor(proveedor:any) {
    document.getElementById('t-alert')?.classList.remove('hidden');
    document.getElementById('t-alert')?.classList.add('show');
    this.closed=false;
    this.tipoModal="ver";
    this.proveedor = proveedor;
  }
  public abrirModal(option:any) {
    if (option==0){
      this.tipoModal="agregar";
      this.productoForm.setValue({
        nombre: '',
        marca: '',
        id: ''
      });
    }else{
      this.tipoModal="editar";
      this.proveedor = option;
      this.productoForm.setValue({
        nombre: option.nombre,
        marca: option.marca,
        proveedor_id: option.idProveedor.id,
        id: option.id
      });
      this.productoForm.get('id')?.disable();
    }
  }
  public eliminarProducto(id: number) {
    this.store.dispatch(productoAction.eliminarProducto({id: id}));
  }

  public closeAlert(){
    if (this.closed==true) {
      document.getElementById('t-alert')?.classList.remove('hidden');
      this.closed=false;
    }else{
      document.getElementById('t-alert')?.classList.add('hidden');
      closed=true;
    }
  }
  public productosProveedor(proveedor:any){
    this.productosPorProveedor = [];
    this.productos$.subscribe(productos => {
      productos.forEach((producto:any) => {
        if(producto.idProveedor.id == proveedor.id){
          this.productosPorProveedor.push(producto);
        }
      });

    });
  }

  public agregarProducto(){
    let proveedor=new Proveedor();
    proveedor.id=this.productoForm.get('proveedor_id')?.value;
    let producto=new Producto();
    producto.nombre=this.productoForm.get('nombre')?.value;
    producto.marca=this.productoForm.get('marca')?.value;
    producto.idProveedor=proveedor;
    if (producto.marca=="" || producto.nombre=="" || producto.idProveedor==null) {
      this.errorHtml="Todos los campos son obligatorios";
    }else{
      if (producto.nombre.length>=50 || producto.marca.length>=50) {
        this.errorHtml="El nombre y la marca no pueden superar los 50 caracteres";
      }else{
        try{
          this.store.dispatch(productoAction.agregarProducto({producto: producto}));
          this.errorHtml="Producto agregado correctamente";
        }
        catch(e){
          this.errorHtml="Error al agregar el producto "+e;
        }
      }
    }
  }
  public editarProducto(){
    let proveedor=new Proveedor();
    proveedor.id=this.productoForm.get('proveedor_id')?.value;
    let producto=new Producto();
    producto.id=this.productoForm.get('id')?.value;
    producto.nombre=this.productoForm.get('nombre')?.value;
    producto.marca=this.productoForm.get('marca')?.value;
    producto.idProveedor=proveedor;
    if (producto.nombre=="" || producto.marca=="" || producto.idProveedor==null) {
      this.errorHtml="Todos los campos son obligatorios";
    }else{
      if (producto.nombre.length>=50 || producto.marca.length>=50) {
        this.errorHtml="El nombre y la marca no pueden superar los 50 caracteres";
      }else{
        try{
          this.store.dispatch(productoAction.actualizarProducto({producto: producto}));
          this.errorHtml="Producto editado correctamente";
        }catch(error){
          this.errorHtml="Error al editar el producto";
        }
      }
    }
  }

}
