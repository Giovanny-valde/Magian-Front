import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { InventarioService } from 'src/app/core/services/inventario/inventario.service';
import * as inventarioAction from 'src/app/core/state/actions/inventario/inventario.action';

@Injectable()
export class InventarioEffects {

  loadInventario$ = createEffect(() => this.actions$.pipe(
    ofType(inventarioAction.listarInventario),
    mergeMap(() => this.inventarioService.listarTodos()
      .pipe(
        map((inventarios) => (inventarioAction.listarInventario_success({ inventarios }))),
        catchError(() => EMPTY)
      ))
    )
  );

  AddInventario$ = createEffect(() => this.actions$.pipe(
    ofType(inventarioAction.agregarInventario),
    mergeMap(({ inventario }) => this.inventarioService.agregar(inventario)
      .pipe(
        map(() => (inventarioAction.listarInventario())),
        catchError(() => EMPTY)
      ))
    )
  );

  UpdateInventario$ = createEffect(() => this.actions$.pipe(
    ofType(inventarioAction.actualizarInventario),
    mergeMap(({ inventario }) => this.inventarioService.actualizar(inventario)
      .pipe(
        map((inventario) => (inventarioAction.listarInventario())),
        catchError(() => EMPTY)
      ))
    )
  );

  DeleteInventario$ = createEffect(() => this.actions$.pipe(
    ofType(inventarioAction.eliminarInventario),
    mergeMap(({ id }) => this.inventarioService.eliminar(id)
      .pipe(
        map(() => (inventarioAction.listarInventario())),
        catchError(() => EMPTY)
      ))
    )
  );

  IdInventario$ = createEffect(() => this.actions$.pipe(
    ofType(inventarioAction.listarIdInventario),
    mergeMap(({ id }) => this.inventarioService.listarPorId(id)
      .pipe(
        map((inventario) => (inventarioAction.listarIdInventario_success({ inventario }))),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private inventarioService: InventarioService
  ) {}
}
