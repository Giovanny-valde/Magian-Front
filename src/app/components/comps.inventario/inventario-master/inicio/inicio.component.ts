import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InicioInventarioComponent implements OnInit {

  public urls:any[]=[
    {
      url:'inventario/',
      nombre:'Inventario',
      icono:'fas fa-shapes',
      descripcion:'Inventario de productos, su stock actual, fecha, tipo y precio.',
    },
    {
      url:'productos/',
      nombre:'Productos',
      icono:'fa-solid fa-boxes-stacked',
      descripcion:'Lista de productos, nombre, marca y proveedor.',
    },
    {
      url:'proveedores/',
      nombre:'Proveedores',
      icono:'fa-solid fa-truck-loading',
      descripcion:'Lista de proveedores, correo, dirección y teléfono.',
    },
    // {
    //   url:'ingresados/',
    //   nombre:'Ingresados',
    //   icono:'fa-solid fa-box-open',
    //   descripcion:'Registro de productos que entran al inventario, cantidad, precio, fecha y tipo (entrada).',
    // },
    {
      url:'ventas/',
      nombre:'Ventas',
      icono:'fas fa-shopping-cart',
      descripcion:'Lista de productos que salen del inventario o venta de productos, cantidad, precio, fecha y tipo (salida).',

    },
    // {
    //   url:'reportes/',
    //   nombre:'Reportes',
    //   icono:'fa-solid fa-chart-line',
    //   descripcion:'Reportes de ventas, ingresos y el inventario actual.',
    // }
  ]

  constructor() { }

  ngOnInit(): void {

  }

}
