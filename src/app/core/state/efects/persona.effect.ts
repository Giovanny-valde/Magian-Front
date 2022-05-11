import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { PersonaService } from 'src/app/core/services/persona/persona.service';
import { addPersona, deletePersona, listarPersona, listarPersonaId, listarPersonaSucces, listarPersonaSuccesId, updatePersona } from '../actions/persona.action';
 
@Injectable({
  providedIn: 'root'
})

export  class PersonaEffects { 
 
  loadPersona$ = createEffect(() => this.actions$.pipe(
    ofType(listarPersona),
    mergeMap(() => this.servicePersona.listarTodos()
      .pipe(
        map((personas) => (listarPersonaSucces({ personas }))),
        catchError(() => EMPTY)
      ))
    )
  );

  AddPersona$ = createEffect(() => this.actions$.pipe(
    ofType(addPersona),
    mergeMap(({ persona }) => this.servicePersona.agregar(persona)
      .pipe(
        map(() => (listarPersona())), 
        catchError(() => EMPTY)
      ))
    )
  );

  UpdatePersona$ = createEffect(() => this.actions$.pipe(
    ofType(updatePersona),
    mergeMap(({ persona }) => this.servicePersona.actualizar(persona)
      .pipe(
        map((empresa) => (listarPersona())),
        catchError(() => EMPTY)
      ))
    )
  );
 
  DeletePersona$ = createEffect(() => this.actions$.pipe(
    ofType(deletePersona),
    mergeMap(({ id }) => this.servicePersona.eliminar(id)
      .pipe(
        map(() => (listarPersona())),
        catchError(() => EMPTY)
      ))
    )
  );
  
  IdPersona$ = createEffect(() => this.actions$.pipe(
    ofType(listarPersonaId),
    mergeMap(({ id }) => this.servicePersona.listarPorId(id)
      .pipe(
        map((persona) => (listarPersonaSuccesId({ persona }))),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private servicePersona: PersonaService
  ) {}
}