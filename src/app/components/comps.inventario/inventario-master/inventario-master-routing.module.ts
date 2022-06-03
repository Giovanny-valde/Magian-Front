import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioInventarioComponent } from './inicio/inicio.component';
import { InventarioMasterComponent } from './inventario-master.component';
import { InventarioComponent } from './inventario/inventario.component';
import { ProductoEntradaComponent } from './producto-entrada/producto-entrada.component';
import { ProductoComponent } from './producto/producto.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { ReportesComponent } from './reportes/reportes.component';
import { VentaComponent } from './venta/venta.component';
const routes: Routes = [
  {
    path: '',
    component: InventarioMasterComponent,
    children: [
      {
        path: '',
        component: InicioInventarioComponent
      },
      {
        path: 'proveedores',
        component: ProveedorComponent
      },
      {
        path: 'productos',
        component: ProductoComponent
      },
      {
        path: 'inventario',
        component: InventarioComponent
      },
      {
        path: 'ventas',
        component: VentaComponent
      },
      {
        path: 'ingresados',
        component: ProductoEntradaComponent
      },
      // {
      //   path: 'reportes',
      //   component: ReportesComponent
      // }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventarioMasterRoutingModule { }
