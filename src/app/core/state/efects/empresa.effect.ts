import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { ServiceEmpresa } from 'src/app/core/services/empresa/empresa.service';
import { addempresa,  deleteempresa,  listarempresa, listarempresaid, listarempresasucess, listarempresasucessid, updateempresa } from '../actions/empresa.action';
 
@Injectable({
  providedIn: 'root'})
export class EmpresaEffects {
 
  loadEmpresas$ = createEffect(() => this.actions$.pipe(
    ofType(listarempresa),
    mergeMap(() => this.serviceEmpresa.listarTodos()
      .pipe(
        map((empresas) => (listarempresasucess({ empresas }))),
        catchError(() => EMPTY)
      ))
    )
  );

  AddEmpresa$ = createEffect(() => this.actions$.pipe(
    ofType(addempresa),
    mergeMap(({ empresa }) => this.serviceEmpresa.agregar(empresa)
      .pipe(
        map(() => (listarempresa())), 
        catchError(() => EMPTY)
      ))
    )
  );

  UpdateEmpresa$ = createEffect(() => this.actions$.pipe(
    ofType(updateempresa),
    mergeMap(({ empresa }) => this.serviceEmpresa.actualizar(empresa)
      .pipe(
        map((empresa) => (listarempresa())),
        catchError(() => EMPTY)
      ))
    )
  );
 
  DeleteEmpresa$ = createEffect(() => this.actions$.pipe(
    ofType(deleteempresa),
    mergeMap(({ id }) => this.serviceEmpresa.eliminar(id)
      .pipe(
        map(() => (listarempresa())),
        catchError(() => EMPTY)
      ))
    )
  );
  
  IdEmpresa$ = createEffect(() => this.actions$.pipe(
    ofType(listarempresaid),
    mergeMap(({ id }) => this.serviceEmpresa.listarPorId(id)
      .pipe(
        map((empresa) => (listarempresasucessid({ empresa }))),
        catchError(() => EMPTY)
      ))
    )
  );

  constructor(
    private actions$: Actions,
    private serviceEmpresa: ServiceEmpresa
  ) {}
}