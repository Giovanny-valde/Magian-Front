import { Component, OnInit } from '@angular/core';
import { BusinessService } from 'src/app/shared/business/business.service';

@Component({
  selector: 'app-business-home',
  templateUrl: './business-home.component.html',
  styleUrls: ['./business-home.component.css']
})
export class BusinessHomeComponent implements OnInit {
  titulo = '';
  public urls:any[]=[
    {
      url:'Perfil',
      nombre:'Perfil',
      icono:'fa-solid fa-user-tie',
      descripcion:'Perfil de la empresa',
    },
    {
      url:'Habitaciones',
      nombre:'Habitaciones',
      icono:'fa-solid fa-bed',
      descripcion:'Habitaciones de la empresa',
    },
    {
      url:'Reserva',
      nombre:'Reservas',
      icono:'fa-solid fa-clipboard-list',
      descripcion:'Reservas de la empresa',
    },
    {
      url:'graficas',
      nombre:'Gráficas',
      icono:'fas fa-pie-chart',
      descripcion:'Gráficas que muestran el estado de tu empresa',
    },
    // {
    //   url:'productos-entrada',
    //   nombre:'Producto Entrada',
    //   icono:'fa-solid fa-people-carry-box',
    //   descripcion:'Registro de productos que entran al inventario, cantidad, precio, fecha y tipo (entrada).',
    // },
    // {
    //   url:'ventas',
    //   nombre:'Ventas',
    //   icono:'fas fa-shopping-cart',
    //   descripcion:'Lista de productos que salen del inventario o venta de productos, cantidad, precio, fecha y tipo (salida).',
    // },
  ]

  constructor(
  private  service: BusinessService
  ) { }

  ngOnInit(): void {
    this.service.nombre$.subscribe(data => {
      this.titulo = data.substring(0,1).toUpperCase() + data.substring(1);
    });
  }

}
