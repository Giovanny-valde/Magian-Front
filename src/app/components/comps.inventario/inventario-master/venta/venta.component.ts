import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { State } from 'src/app/core/state/app.state';
import * as PersonaInventarioSelectors from 'src/app/core/state/selectors/persona_inventario/persona_inventario.selector';
import * as PersonaInventarioActions from 'src/app/core/state/actions/persona_inventario/persona_inventario.action';
import { DatatableOptionsService } from '../../datatable-options.service';
import * as ProductoSelectors from 'src/app/core/state/selectors/producto/producto.selector';
import * as ProductoActions from 'src/app/core/state/actions/producto/producto.action';
import * as PersonaSelectors from 'src/app/core/state/selectors/persona.selector';
import * as PersonaActions from 'src/app/core/state/actions/persona.action';
import * as InventarioActions from 'src/app/core/state/actions/inventario/inventario.action';
import * as InventarioSelectors from 'src/app/core/state/selectors/inventario/inventario.selector';
import { personaInventario } from 'src/app/core/models/persona_inventario/persoinventario';
import {persona } from 'src/app/core/models/persona/persona';
import { Producto } from 'src/app/core/models/producto/producto';
import { Inventario } from 'src/app/core/models/inventario/inventario';
import { InventarioService } from 'src/app/core/services/inventario/inventario.service';


@Component({
  selector: 'app-venta',
  templateUrl: './venta.component.html',
  styleUrls: ['./venta.component.css']
})
export class VentaComponent implements OnInit {

  public personaInventarios$ : Observable<any> = new Observable();
  public personaInventario$: Observable<any> = new Observable();
  public producto$: Observable<any> = new Observable();
  public productos$: Observable<any> = new Observable();
  public persona$: Observable<any> = new Observable();
  public personas$: Observable<any> = new Observable();
  public inventarios$: Observable<any> = new Observable();
  public inventario$: Observable<any> = new Observable();
  public loading$ : Observable<boolean> = new Observable();
  public dtOptions: any = {};
  public tipo:any;
  public listaVentas:any=[];
  public persona:any={};
  public producto:any={};
  public inventario:any={};
  public mensaje:string="";
  private contador:number=0;
  public venta:any= {};
  constructor(
    private store: Store,
    private storeState: Store<State>,
    private datatableOptionsService: DatatableOptionsService,
    private inventarioService: InventarioService,
  ) { }
  public ventaForm = new FormGroup({
    idpersona: new FormControl(''),
    idproducto: new FormControl(''),
    cantidad: new FormControl(''),
    precio: new FormControl(''),
    fecha: new FormControl(''),
	});
  public ventaEditarForm = new FormGroup({
    id:new FormControl(''),
    idpersona: new FormControl(''),
    idproducto: new FormControl(''),
    cantidad: new FormControl(''),
    precio: new FormControl(''),
    fecha: new FormControl(''),
  })

  ngOnInit() {
    this.dtOptions = this.datatableOptionsService.createDatatableOptions([0,1,2,3,4,5,6], "Ventas");
    this.personaInventarios$ = this.storeState.select(PersonaInventarioSelectors.selectPersonaInventarioList);
    this.store.dispatch(PersonaInventarioActions.listar());
    this.personaInventario$ = this.storeState.select(PersonaInventarioSelectors.selectPersonaInventarioId);
    this.producto$ = this.storeState.select(ProductoSelectors.selectProductoId);
    this.productos$ = this.storeState.select(ProductoSelectors.selectProductoList);
    this.store.dispatch(ProductoActions.listarProducto());
    this.persona$ = this.storeState.select(PersonaSelectors.selectPersonaPorId);
    this.personas$ = this.storeState.select(PersonaSelectors.selectPersonaList);
    this.store.dispatch(PersonaActions.listarPersona());
    this.inventarios$=this.storeState.select(InventarioSelectors.selectInventarioList);
    this.inventario$=this.storeState.select(InventarioSelectors.selectInventarioId);
    this.store.dispatch(InventarioActions.listarInventario());
  }
  public formatearFecha(fecha: any) {
		return new Date(fecha).toLocaleDateString();
	}
  public guardarVenta(){
    this.listaVentas.forEach((element:any) => {
      let personaobj = new persona();
      personaobj.id = element.idpersona;

      let productoobj = new Producto();
      productoobj.id = element.idproducto;

      let inventarioobj = new Inventario();
      inventarioobj.cantidad = element.cantidad;
      inventarioobj.precio = element.precio;
      inventarioobj.fecha = element.fecha;
      inventarioobj.idProducto = productoobj;
      inventarioobj.tipo = 'salida';
      this.store.dispatch(InventarioActions.agregarInventario({inventario:inventarioobj}));
      let ultimoId = 0;
      this.inventarioService.listarTodos().subscribe(
        (data:any)=>{
          ultimoId = data[data.length-1].id;
          let personaobj = new persona();
          personaobj.id = element.idpersona;

          let productoobj = new Producto();
          productoobj.id = element.idproducto;

          let inventarioobj = new Inventario();
          inventarioobj.cantidad = element.cantidad;
          inventarioobj.precio = element.precio;
          inventarioobj.fecha = element.fecha;
          inventarioobj.idProducto = productoobj;
          inventarioobj.tipo = 'salida';
          inventarioobj.id = ultimoId;
          let personaInventarioobj = new personaInventario();
          personaInventarioobj.idpersona = personaobj;
          personaInventarioobj.idinventario = inventarioobj;
          this.store.dispatch(PersonaInventarioActions.agregar({personaInventario:personaInventarioobj}));
        }
      )
    })
    this.mensaje="Ventas procesadas con exito";
    this.listaVentas=[];

  }
  public agregar(){

    if(this.ventaForm.get('idpersona')?.value==""
      || this.ventaForm.get('idproducto')?.value==""
      || this.ventaForm.get('cantidad')?.value==""
      || this.ventaForm.get('precio')?.value==""
      || this.ventaForm.get('fecha')?.value==""){
        this.mensaje="Todos los campos son obligatorios";
  }else{
    this.listaVentas.push(this.ventaForm.value);
    this.contador++;
    this.mensaje="Venta añadida a la lista de ventas X"+this.contador;
  }
  this.ventaForm.reset();

}
public borrarDeTabla(index:number){
  console.log(index);
  let contador=0;
  this.listaVentas.forEach((element:any) => {
    if(contador==index){
      this.listaVentas.splice(index,1);
    }
    contador++;
  });
}

public verDatos(venta:any,tipo:any){
  this.tipo = tipo;
  console.log(venta)
  this.persona = {
    id:venta.idpersona.id,
    dni:venta.idpersona.dni,
    nombre:venta.idpersona.nombre,
    apellido:venta.idpersona.apellido,
    telefono:venta.idpersona.telefono,
    pais:venta.idpersona.pais,
    correo:venta.idpersona.correo,
  }
  this.producto = {
    id:venta.idinventario.idProducto.id,
    idProveedor:venta.idinventario.idProducto.idProveedor.correo,
    marca:venta.idinventario.idProducto.marca,
    nombre:venta.idinventario.idProducto.nombre,
  }
  this.inventario={
    id:venta.idinventario.id,
    cantidad:venta.idinventario.cantidad,
    precio:venta.idinventario.precio,
    fecha:venta.idinventario.fecha,
  }

  this.venta = {
    id:venta.id
  }
  if(tipo==2){
    this.ventaEditarForm.setValue({
      id:venta.id,
      idpersona:this.persona.id,
      idproducto:this.producto.id,
      cantidad:this.inventario.cantidad,
      precio:this.inventario.precio,
      fecha:this.inventario.fecha,
    })
  }
}

public calcularTotal() {
  let totalGanado = 0;
  this.personaInventarios$.forEach((element:any) => {
    element.forEach((element2:any) => {
      totalGanado+=element2.idinventario.precio * element2.idinventario.cantidad;
    })
  })
  return totalGanado;
}
public eliminar(id:any){
  this.store.dispatch(PersonaInventarioActions.eliminar({id:id}));
}
public editarVenta(){
  let venta= this.ventaEditarForm.value;
  console.log(venta);
  this.store.dispatch(PersonaInventarioActions.actualizar({personaInventario:this.venta}));
  this.mensaje="Venta editada con exito";
  this.ventaEditarForm.reset();
}


}
