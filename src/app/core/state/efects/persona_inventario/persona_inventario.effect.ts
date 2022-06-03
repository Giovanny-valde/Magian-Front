import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { PersonaInventarioService } from 'src/app/core/services/persona_inventario/persoinventario.service';
import * as personaInventarioAction from 'src/app/core/state/actions/persona_inventario/persona_inventario.action';

@Injectable()
export class PersonaInventarioEffects{

  loadPersonaInventario$ = createEffect(() => this.actions$.pipe(
    ofType(personaInventarioAction.listar),
    mergeMap(() => this.personaInventarioService.listarTodos()
      .pipe(
        map((personaInventario) => (personaInventarioAction.listar_success({ personaInventario }))),
        catchError(() => EMPTY)
      ))
    )
  );
  Add$ = createEffect(() => this.actions$.pipe(
    ofType(personaInventarioAction.agregar),
    mergeMap(({ personaInventario }) => this.personaInventarioService.agregar(personaInventario)
      .pipe(
        map(() => (personaInventarioAction.listar())),
        catchError(() => EMPTY)
      ))
    )

  );

  Update$ = createEffect(() => this.actions$.pipe(
    ofType(personaInventarioAction.actualizar),
    mergeMap(({ personaInventario }) => this.personaInventarioService.actualizar(personaInventario)
      .pipe(
        map((personaInventario) => (personaInventarioAction.listar())),
        catchError(() => EMPTY)
      ))
    )
  );

  Delete$ = createEffect(() => this.actions$.pipe(
    ofType(personaInventarioAction.eliminar),
    mergeMap(({ id }) => this.personaInventarioService.eliminar(id)
      .pipe(
        map(() => (personaInventarioAction.listar())),
        catchError(() => EMPTY)
      ))
    )
  );

  id$ = createEffect(() => this.actions$.pipe(
    ofType(personaInventarioAction.listarId),
    mergeMap(({ id }) => this.personaInventarioService.listarPorId(id)
      .pipe(
        map((personaInventario) => (personaInventarioAction.listarId_success({ personaInventario }))),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private personaInventarioService: PersonaInventarioService
  ) {}
}
