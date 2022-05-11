import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuAdminComponent } from './shared/admin/admin/menu-admin/menu-admin.component';
import { MenuBusinessComponent } from './shared/business/menu-business/menu-business.component';

const routes: Routes = [
  {
    path: 'admin',
    component: MenuAdminComponent,
    loadChildren: () => import('src/app/shared/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path : 'Business/:nombre',
    component : MenuBusinessComponent,
    loadChildren: () => import('src/app/shared/business/business.module').then(m => m.BusinessModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
