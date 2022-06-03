import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto-entrada',
  templateUrl: './producto-entrada.component.html',
  styleUrls: ['./producto-entrada.component.css']
})
export class ProductoEntradaComponent implements OnInit {

  public inventarios:any[]=[
    {
      id:1,
      producto:{
        id:1,
        nombre:'Producto 1',
        marca:'Marca 1',
      },
      cantidad:10,
      precio:100,
      fecha:'01/01/2020',
      tipo:'Entrada',
    },
    {
      id:2,
      producto:{
        id:2,
        nombre:'Producto 2',
        marca:'Marca 2',
      },
      cantidad:20,
      precio:200,
      fecha:'02/02/2020',
      tipo:'Salida',
    },
    {
      id:3,
      producto:{
        id:3,
        nombre:'Producto 3',
        marca:'Marca 3',
      },
      cantidad:30,
      precio:300,
      fecha:'03/03/2020',
      tipo:'Entrada',
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
