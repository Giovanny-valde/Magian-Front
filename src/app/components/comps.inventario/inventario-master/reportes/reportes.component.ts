import { Component, OnInit } from '@angular/core';
import { Proveedor } from 'src/app/core/models/proveedor/proveedor';
import {
  Observable
} from 'rxjs';
import { ProveedorService } from 'src/app/core/services/proveedor/proveedor.service';
import { ProductoService } from 'src/app/core/services/producto/producto.service';
import { Producto } from 'src/app/core/models/producto/producto';
@Component({
  selector: 'app-reportes',
  templateUrl: './reportes.component.html',
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent implements OnInit {
  public options: any = {}
  constructor(
    private _proveedorService: ProveedorService,
    private _productoService: ProductoService
  ) { }
  ngOnInit() {
    this._productoService.listarTodos().subscribe(
      (data: Producto[]) => {
        console.log(data);
        this.options = {
          tooltip: {
            trigger: 'item'
          },
          series: [
            {
              type: 'pie',
              radius: '60%',
              data: data,
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        };
      }
    )
  }
}

