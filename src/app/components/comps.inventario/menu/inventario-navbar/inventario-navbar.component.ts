import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inventario-navbar',
  templateUrl: './inventario-navbar.component.html',
  styleUrls: ['./inventario-navbar.component.css']
})
export class InventarioNavbarComponent implements OnInit {

  public inventarioLinks = [
    {
      label: 'Inicio',
      link: './',
      icon: 'fa-solid fa-home'
    },
    {
      label: 'Inventario',
      link: 'inventario/',
      icon: 'fa-solid fa-shapes',
    },
    {
      label: 'Productos',
      link: 'productos/',
      icon: 'fa-solid fa-boxes-stacked',
    },
    {
      label: 'Proveedores',
      link: 'proveedores/',
      icon: 'fa-solid fa-truck-loading',
    },
    // {
    //   label: 'Ingresados',
    //   link: 'ingresados/',
    //   icon: 'fa-solid fa-box-open',
    // },
    {
      label: 'Ventas',
      link: 'ventas/',
      icon: 'fa-solid fa-shopping-cart',
    },
    // {
    //   label: 'Reportes',
    //   link: 'reportes/',
    //   icon: 'fa-solid fa-chart-line',
    // }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
