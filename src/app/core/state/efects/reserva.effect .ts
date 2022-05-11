import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ReservaService } from 'src/app/core/services/reserva/reserva.service';
import { addReserva, deleteReserva, listarReserva, listarReservaId, listarReservaSucces, listarReservaSuccesId, updateReserva } from '../actions/reserva.action';
 
@Injectable({
  providedIn: 'root'
})

export  class ReservaEffects {
 
  loadReserva$ = createEffect(() => this.actions$.pipe(
    ofType(listarReserva),
    mergeMap(() => this.serviceReserva.listarTodos()
      .pipe(
        map((reservas) => (listarReservaSucces({ reservas }))),
        catchError(() => EMPTY)
      ))
    )
  );

  AddReserva$ = createEffect(() => this.actions$.pipe(
    ofType(addReserva),
    mergeMap(({ reserva }) => this.serviceReserva.agregar(reserva)
      .pipe(
        map(() => (listarReserva())), 
        catchError(() => EMPTY)
      ))
    )
  );

  UpdateReserva$ = createEffect(() => this.actions$.pipe(
    ofType(updateReserva),
    mergeMap(({ reserva }) => this.serviceReserva.actualizar(reserva)
      .pipe(
        map((empresa) => (listarReserva())),
        catchError(() => EMPTY)
      ))
    )
  );
 
  DeleteReserva$ = createEffect(() => this.actions$.pipe(
    ofType(deleteReserva),
    mergeMap(({ id }) => this.serviceReserva.eliminar(id)
      .pipe(
        map(() => (listarReserva())),
        catchError(() => EMPTY)
      ))
    )
  );
  
  IdReserva$ = createEffect(() => this.actions$.pipe(
    ofType(listarReservaId),
    mergeMap(({ id }) => this.serviceReserva.listarPorId(id)
      .pipe(
        map((reserva) => (listarReservaSuccesId({ reserva }))),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private serviceReserva: ReservaService
  ) {}
}