import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminEmpresasComponent } from 'src/app/forms/forms-admin/admin-empresas/admin-empresas.component';
import { AdminTuristasComponent } from 'src/app/forms/forms-admin/admin-turistas/admin-turistas.component';
import { MenuAdminComponent } from './admin/menu-admin/menu-admin.component';

//RUTAS DEL MENU
const routes: Routes = [
  {
    path: 'misempresas',
    component: AdminEmpresasComponent
    // loadChildren: () => import('src/app/shared/admin/admin/admin.menu-routing.module').then(m => m.AdminMenuRoutingModule)
  },
  {
    path: 'misturistas',
    component : AdminTuristasComponent
  },
  {
    path: 'admin',
    component: MenuAdminComponent,
  },
  {
    path: '',
    redirectTo: 'misempresas',
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
