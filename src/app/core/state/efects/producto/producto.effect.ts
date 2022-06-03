import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ProductoService } from 'src/app/core/services/producto/producto.service';
import * as productoAction from 'src/app/core/state/actions/producto/producto.action';

@Injectable()
export class ProductoEffects {

  loadProductos$ = createEffect(() => this.actions$.pipe(
    ofType(productoAction.listarProducto),
    mergeMap(() => this.productoService.listarTodos()
      .pipe(
        map((productos) => (productoAction.listarProducto_success({ productos }))),
        catchError(() => EMPTY)
      ))
    )
  );

  AddProducto$ = createEffect(() => this.actions$.pipe(
    ofType(productoAction.agregarProducto),
    mergeMap(({ producto }) => this.productoService.agregar(producto)
      .pipe(
        map(() => (productoAction.listarProducto())),
        catchError(() => EMPTY)
      ))
    )

  );

  UpdateProducto$ = createEffect(() => this.actions$.pipe(
    ofType(productoAction.actualizarProducto),
    mergeMap(({ producto }) => this.productoService.actualizar(producto)
      .pipe(
        map((producto) => (productoAction.listarProducto())),
        catchError(() => EMPTY)
      ))
    )
  );

  DeleteProducto$ = createEffect(() => this.actions$.pipe(
    ofType(productoAction.eliminarProducto),
    mergeMap(({ id }) => this.productoService.eliminar(id)
      .pipe(
        map(() => (productoAction.listarProducto())),
        catchError(() => EMPTY)
      ))
    )
  );

  IdProducto$ = createEffect(() => this.actions$.pipe(
    ofType(productoAction.listarIdProducto),
    mergeMap(({ id }) => this.productoService.listarPorId(id)
      .pipe(
        map((producto) => (productoAction.listarIdProducto_success({ producto }))),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private productoService: ProductoService
  ) {}
}
