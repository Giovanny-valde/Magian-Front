import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ProveedorService } from 'src/app/core/services/proveedor/proveedor.service';
import * as proveedorAction from 'src/app/core/state/actions/proveedor/proveedor.action';
 
@Injectable()
export class ProveedorEffects {
  
  loadProveedores$ = createEffect(() => this.actions$.pipe(
    ofType(proveedorAction.listarProveedor),
    mergeMap(() => this.proveedorService.listarTodos()
      .pipe(
        map((proveedores) => (proveedorAction.listarProveedor_success({ proveedores }))),
        catchError(() => EMPTY)
      ))
    )
  );

  AddProveedor$ = createEffect(() => this.actions$.pipe(
    ofType(proveedorAction.agregarProveedor),
    mergeMap(({ proveedor }) => this.proveedorService.agregar(proveedor)
      .pipe(
        map(() => (proveedorAction.listarProveedor())), 
        catchError(() => EMPTY)
      ))
    )
    
  );

  UpdateProveedor$ = createEffect(() => this.actions$.pipe(
    ofType(proveedorAction.actualizarProveedor),
    mergeMap(({ proveedor }) => this.proveedorService.actualizar(proveedor)
      .pipe(
        map((proveedor) => (proveedorAction.listarProveedor())),
        catchError(() => EMPTY)
      ))
    )
  );
 
  DeleteProveedor$ = createEffect(() => this.actions$.pipe(
    ofType(proveedorAction.eliminarProveedor),
    mergeMap(({ id }) => this.proveedorService.eliminar(id)
      .pipe(
        map(() => (proveedorAction.listarProveedor())),
        catchError(() => EMPTY)
      ))
    )
  );
  
  IdProveedor$ = createEffect(() => this.actions$.pipe(
    ofType(proveedorAction.listarIdProveedor),
    mergeMap(({ id }) => this.proveedorService.listarPorId(id)
      .pipe(
        map((proveedor) => (proveedorAction.listarIdProveedor_success({ proveedor }))),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private proveedorService: ProveedorService
  ) {}
}

