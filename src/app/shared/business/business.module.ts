import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import {MatTabsModule} from '@angular/material/tabs';


import { BusinessRoutingModule } from './business-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuBusinessComponent } from './menu-business/menu-business.component';
import { BusinessPerfilComponent } from 'src/app/forms/forms-business/business-perfil/business-perfil.component';
import { BusinessHabitacionesComponent } from 'src/app/forms/forms-business/business-habitaciones/business-habitaciones.component';
import { BusinessHabitacionesEditComponent } from 'src/app/forms/forms-business/business-habitaciones/business-habitaciones-edit/business-habitaciones-edit.component';
import { BusinessDescuentoComponent } from 'src/app/forms/forms-business/business-descuento/business-descuento.component';
import { BusinessDescuentoEditComponent } from 'src/app/forms/forms-business/business-descuento/business-descuento-edit/business-descuento-edit.component';
import { BusinessHomeComponent } from 'src/app/forms/forms-business/business-home/business-home.component';
import { BusinessImagenesComponent } from 'src/app/forms/forms-business/business-imagenes/business-imagenes.component';
import { BusinessReservaComponent } from 'src/app/forms/forms-business/business-reserva/business-reserva.component';
import { BusinessReservaEditComponent } from 'src/app/forms/forms-business/business-reserva/business-reserva-edit/business-reserva-edit.component';





@NgModule({
  declarations: [
    MenuBusinessComponent,
    BusinessPerfilComponent,
    BusinessHabitacionesComponent,
    BusinessHabitacionesEditComponent,
    BusinessDescuentoComponent,
    BusinessHabitacionesEditComponent,
    BusinessDescuentoEditComponent,
    BusinessHomeComponent,
    BusinessImagenesComponent, 
    BusinessReservaComponent,
    BusinessReservaEditComponent,
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    BusinessRoutingModule,
    MatTabsModule 
  ]
})
export class BusinessModule { }
