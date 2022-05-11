import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { ROOT_REDUCERS } from './core/state/app.state';
import { EffectsModule } from '@ngrx/effects';

import { EmpresaEffects } from './core/state/efects/empresa.effect';
import { HabitacionEffects } from 'src/app/core/state/efects/habitacion.effect';
import { ComentarioEffects } from './core/state/efects/comentario.effect ';
import { PersonaEffects } from './core/state/efects/persona.effect';
import { ReservaEffects } from './core/state/efects/reserva.effect ';
import { Reserva_clienteEffects } from './core/state/efects/reserva_cliente.effect ';
import { DescuentoEffects } from './core/state/efects/descuento.effect ';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent, 
    // AdminTuristaEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({}),
    EffectsModule.forRoot([
      EmpresaEffects,
      HabitacionEffects,
      ComentarioEffects,
      PersonaEffects,
      ReservaEffects,
      Reserva_clienteEffects,
      DescuentoEffects
    ]),

  ],
  providers: [
    DatePipe,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
