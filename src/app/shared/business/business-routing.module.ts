import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessPerfilComponent } from 'src/app/forms/forms-business/business-perfil/business-perfil.component';
import { AdminTuristasComponent } from 'src/app/forms/forms-admin/admin-turistas/admin-turistas.component';
import { BusinessHabitacionesComponent } from 'src/app/forms/forms-business/business-habitaciones/business-habitaciones.component';
import { BusinessHomeComponent } from 'src/app/forms/forms-business/business-home/business-home.component';
import { BusinessReservaComponent } from 'src/app/forms/forms-business/business-reserva/business-reserva.component';

//RUTAS DEL MENU
const routes: Routes = [
  {
    path: 'Reserva', component: BusinessReservaComponent
  },
  {
    path: 'Perfil',
    component:BusinessPerfilComponent
    // loadChildren: () => import('src/app/shared/admin/admin/admin.menu-routing.module').then(m => m.AdminMenuRoutingModule)
  },
  {
    path: 'Habitaciones',
    component : BusinessHabitacionesComponent
  },
  {
    path: '',
    component: BusinessHomeComponent,
  },
  {
    path: 'Home',
    redirectTo : "" 
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessRoutingModule { }
