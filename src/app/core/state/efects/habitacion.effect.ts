import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { HabitacionService } from 'src/app/core/services/habitacion/habitacion.service';
import { addHabitacion, deleteHabitacion, listarHabitacion, listarHabitacionId, listarHabitacionSucces, listarHabitacionSuccesId, updateHabitacion } from '../actions/habitacion.action';
 
@Injectable({
  providedIn: 'root'
})

export  class HabitacionEffects {
 
  loadHabitaciones$ = createEffect(() => this.actions$.pipe(
    ofType(listarHabitacion),
    mergeMap(() => this.serviceHabitacion.listarTodos()
      .pipe(
        map((habitaciones) => (listarHabitacionSucces({ habitaciones }))),
        catchError(() => EMPTY)
      ))
    )
  );

  AddHabitacion$ = createEffect(() => this.actions$.pipe(
    ofType(addHabitacion),
    mergeMap(({ habitacion }) => this.serviceHabitacion.agregar(habitacion)
      .pipe(
        map(() => (listarHabitacion())), 
        catchError(() => EMPTY)
      ))
    )
  );

  UpdateHabitacion$ = createEffect(() => this.actions$.pipe(
    ofType(updateHabitacion),
    mergeMap(({ habitacion }) => this.serviceHabitacion.actualizar(habitacion)
      .pipe(
        map(() => (listarHabitacion())),
        catchError(() => EMPTY)
      ))
    )
  );
 
  DeleteHabitacion$ = createEffect(() => this.actions$.pipe(
    ofType(deleteHabitacion),
    mergeMap(({ id }) => this.serviceHabitacion.eliminar(id)
      .pipe(
        map(() => (listarHabitacion())),
        catchError(() => EMPTY)
      ))
    )
  );
  
  IdHabitacion$ = createEffect(() => this.actions$.pipe(
    ofType(listarHabitacionId),
    mergeMap(({ id }) => this.serviceHabitacion.listarPorId(id)
      .pipe(
        map((habitacion) => (listarHabitacionSuccesId({ habitacion }))),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private serviceHabitacion: HabitacionService
  ) {}
}