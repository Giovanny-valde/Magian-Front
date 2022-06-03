import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataTablesModule } from 'angular-datatables';
import { ReactiveFormsModule } from '@angular/forms';
import { InventarioMasterRoutingModule } from './inventario-master-routing.module';
import { InventarioMasterComponent } from './inventario-master.component';
import { InventarioNavbarComponent } from '../menu/inventario-navbar/inventario-navbar.component';
import { InicioInventarioComponent } from './inicio/inicio.component';
import { ProveedorComponent } from './proveedor/proveedor.component';
import { ProductoComponent } from './producto/producto.component';
import { InventarioComponent } from './inventario/inventario.component';
import { VentaComponent } from './venta/venta.component';
import { ProductoEntradaComponent } from './producto-entrada/producto-entrada.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { ReportesComponent } from './reportes/reportes.component';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';

@NgModule({
  declarations: [
    InventarioMasterComponent,
    InventarioNavbarComponent,
    ProveedorComponent,
    InicioInventarioComponent,
    ProductoComponent,
    InventarioComponent,
    VentaComponent,
    ProductoEntradaComponent,
    ReportesComponent
  ],
  imports: [
    CommonModule,
    InventarioMasterRoutingModule,
    ReactiveFormsModule,
    DataTablesModule,
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    MdbTabsModule
  ],
  exports:[
    DataTablesModule
  ],
})
export class InventarioMasterModule { }
