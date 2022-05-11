import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { MenuAdminComponent } from './admin/menu-admin/menu-admin.component';
import { AdminEmpresasComponent } from 'src/app/forms/forms-admin/admin-empresas/admin-empresas.component';
import { AdminTuristasComponent } from 'src/app/forms/forms-admin/admin-turistas/admin-turistas.component';
import { MatDialogModule } from '@angular/material/dialog';
import { AdminEmpresaEditComponent } from 'src/app/forms/forms-admin/admin-empresas/admin-empresa-edit/admin-empresa-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HabitacionComponent } from 'src/app/components/comps.admin/habitaciones/habitaciones.component';
import { ComentarioComponent } from 'src/app/components/comps.admin/comentario/comentario.component';
import { AdminTuristaEditComponent } from 'src/app/forms/forms-admin/admin-turistas/admin-turista-edit/admin-turista-edit.component';
import { ReservaComponent } from 'src/app/components/comps.admin/reserva/reservas.component';
import { MatTabsModule } from '@angular/material/tabs';


@NgModule({
  declarations: [
    //MENU ADMIN
    MenuAdminComponent,
    
    //empresas
    AdminEmpresasComponent,
    AdminEmpresaEditComponent,
    //turistas
    AdminTuristasComponent,
    AdminTuristaEditComponent,
    //habitaciones
    HabitacionComponent,
    //comentarios
    ComentarioComponent,
    //reservas
    ReservaComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatDialogModule,
    MatTabsModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class AdminModule { }
