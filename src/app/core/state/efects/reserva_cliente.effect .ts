import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ReservaClienteService } from 'src/app/core/services/reserva_cliente/resercliente.service';
import { addReserva_cliente, deleteReserva_cliente, listarReserva_cliente, listarReserva_clienteId, listarReserva_clienteSucces, listarReserva_clienteSuccesId, updateReserva_cliente } from '../actions/reserva_cliente.action';
 
@Injectable({
  providedIn: 'root'
})

export  class Reserva_clienteEffects {
 
  loadReserva_cliente$ = createEffect(() => this.actions$.pipe(
    ofType(listarReserva_cliente),
    mergeMap(() => this.serviceReserva_cliente.listarTodos()
      .pipe(
        map((reserclientes) => (listarReserva_clienteSucces({ reserclientes }))),
        catchError(() => EMPTY)
      ))
    )
  );

  AddReserva_cliente$ = createEffect(() => this.actions$.pipe(
    ofType(addReserva_cliente),
    mergeMap(({ resercliente }) => this.serviceReserva_cliente.agregar(resercliente)
      .pipe(
        map(() => (listarReserva_cliente())), 
        catchError(() => EMPTY)
      ))
    )
  );

  UpdateReserva_cliente$ = createEffect(() => this.actions$.pipe(
    ofType(updateReserva_cliente),
    mergeMap(({ resercliente  }) => this.serviceReserva_cliente.actualizar(resercliente)
      .pipe(
        map((empresa) => (listarReserva_cliente())),
        catchError(() => EMPTY)
      ))
    )
  );
 
  DeleteReserva_cliente$ = createEffect(() => this.actions$.pipe(
    ofType(deleteReserva_cliente),
    mergeMap(({ id }) => this.serviceReserva_cliente.eliminar(id)
      .pipe(
        map(() => (listarReserva_cliente())),
        catchError(() => EMPTY)
      ))
    )
  );
  
  IdReserva_cliente$ = createEffect(() => this.actions$.pipe(
    ofType(listarReserva_clienteId),
    mergeMap(({ id }) => this.serviceReserva_cliente.listarPorId(id)
      .pipe(
        map((resercliente) => (listarReserva_clienteSuccesId({ resercliente }))),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private serviceReserva_cliente: ReservaClienteService
  ) {}
}