import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { DescuentoService } from 'src/app/core/services/descuento/descuento.service';
import { addDescuento, deleteDescuento, listarDescuento, listarDescuentoId, listarDescuentoSucces, listarDescuentoSuccesId, updateDescuento } from '../actions/descuento.action';
 
@Injectable({
  providedIn: 'root'
})

export  class DescuentoEffects {
 
  loadDescuento$ = createEffect(() => this.actions$.pipe(
    ofType(listarDescuento),
    mergeMap(() => this.serviceDescuento.listarTodos()
      .pipe(
        map((descuentos) => (listarDescuentoSucces({ descuentos }))),
        catchError(() => EMPTY)
      ))
    )
  );

  AddDescuento$ = createEffect(() => this.actions$.pipe(
    ofType(addDescuento),
    mergeMap(({ descuento }) => this.serviceDescuento.agregar(descuento)
      .pipe(
        map(() => (listarDescuento())), 
        catchError(() => EMPTY)
      ))
    )
  );

  UpdateDescuento$ = createEffect(() => this.actions$.pipe(
    ofType(updateDescuento),
    mergeMap(({ descuento }) => this.serviceDescuento.actualizar(descuento)
      .pipe(
        map((empresa) => (listarDescuento())),
        catchError(() => EMPTY)
      ))
    )
  );
 
  DeleteDescuento$ = createEffect(() => this.actions$.pipe(
    ofType(deleteDescuento),
    mergeMap(({ id }) => this.serviceDescuento.eliminar(id)
      .pipe(
        map(() => (listarDescuento())),
        catchError(() => EMPTY)
      ))
    )
  );
  
  IdDescuento$ = createEffect(() => this.actions$.pipe(
    ofType(listarDescuentoId),
    mergeMap(({ id }) => this.serviceDescuento.listarPorId(id)
      .pipe(
        map((descuento) => (listarDescuentoSuccesId({ descuento }))),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private serviceDescuento: DescuentoService
  ) {}
}