import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessPerfilComponent } from 'src/app/forms/forms-business/business-perfil/business-perfil.component';
import { AdminTuristasComponent } from 'src/app/forms/forms-admin/admin-turistas/admin-turistas.component';
import { BusinessHabitacionesComponent } from 'src/app/forms/forms-business/business-habitaciones/business-habitaciones.component';

//RUTAS DEL MENU
const routes: Routes = [
  {
    path: 'Home',
    component:BusinessPerfilComponent
    // loadChildren: () => import('src/app/shared/admin/admin/admin.menu-routing.module').then(m => m.AdminMenuRoutingModule)
  },
  {
    path: 'Habitaciones',
    component : BusinessHabitacionesComponent
  },
  {
    path: '',
    redirectTo: 'Home',
  },
  {
    path: 'inventario',
    loadChildren: () => import('src/app/components/comps.inventario/inventario-master/inventario-master.module').then(m => m.InventarioMasterModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessRoutingModule { }
