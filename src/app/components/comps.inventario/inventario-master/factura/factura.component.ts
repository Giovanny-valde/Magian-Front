import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {

  public facturas:any[]=[
    {
      id:1,
      inventario:{
        id:1,
        fecha:"27/01/01"
      },
      reserva:{
        id:1
      },
      personainventario:{
        id:1
      },
      personahabitacion:{
        id:1
      }
    },
    {
      id:2,
      inventario:{
        id:2,
        fecha:"22/02/02"
      },
      reserva:{
        id:2
      },
      personainventario:{
        id:2
      },
      personahabitacion:{
        id:2
      }

    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
