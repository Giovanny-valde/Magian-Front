import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ComentarioService } from 'src/app/core/services/comentario/comentario.service';
import { addComentario, deleteComentario, listarComentario, listarComentarioId, listarComentarioSucces, listarComentarioSuccesId, updateComentario } from '../actions/comentario.action';
 
@Injectable({
  providedIn: 'root'
})

export  class ComentarioEffects {
 
  loadComentario$ = createEffect(() => this.actions$.pipe(
    ofType(listarComentario),
    mergeMap(() => this.serviceComentario.listarTodos()
      .pipe(
        map((comentarios) => (listarComentarioSucces({ comentarios }))),
        catchError(() => EMPTY)
      ))
    )
  );

  AddComentario$ = createEffect(() => this.actions$.pipe(
    ofType(addComentario),
    mergeMap(({ comentario }) => this.serviceComentario.agregar(comentario)
      .pipe(
        map(() => (listarComentario())), 
        catchError(() => EMPTY)
      ))
    )
  );

  UpdateComentario$ = createEffect(() => this.actions$.pipe(
    ofType(updateComentario),
    mergeMap(({ comentario }) => this.serviceComentario.actualizar(comentario)
      .pipe(
        map((empresa) => (listarComentario())),
        catchError(() => EMPTY)
      ))
    )
  );
 
  DeleteComentario$ = createEffect(() => this.actions$.pipe(
    ofType(deleteComentario),
    mergeMap(({ id }) => this.serviceComentario.eliminar(id)
      .pipe(
        map(() => (listarComentario())),
        catchError(() => EMPTY)
      ))
    )
  );
  
  IdComentario$ = createEffect(() => this.actions$.pipe(
    ofType(listarComentarioId),
    mergeMap(({ id }) => this.serviceComentario.listarPorId(id)
      .pipe(
        map((comentario) => (listarComentarioSuccesId({ comentario }))),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private serviceComentario: ComentarioService
  ) {}
}