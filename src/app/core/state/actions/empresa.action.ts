import {  createAction, props } from '@ngrx/store';
import { empresa } from 'src/app/core/models/empresa/empresa';

//LISTAR
export const listarempresa = createAction(
    '[cargando ] cargar empresa' 
    );
    
export const listarempresasucess = createAction(
    '[empresas] empresas cargadas',
     props<{ empresas : empresa[] }>()
);

//LISTAR POR ID
export const listarempresaid = createAction(
    '[cargando ] cargar empresa por id',
    props<{ id : number }>());

export const listarempresasucessid = createAction(
    '[empresas] empresa cargada por id',
        props<{ empresa : empresa }>()
);
//AGREGAR
export const addempresa = createAction(
    '[agregar] agregar empresa',
    props<{empresa: empresa}>());

//ACTUALIZAR
export const updateempresa = createAction(
    '[actualizar] actualizar empresa',
    props<{empresa: empresa}>());

//ELIMINAR
export const deleteempresa = createAction(
    '[eliminar] eliminar empresa',
    props<{id: number}>());
    
//IDEMPRESA

export  const idempresa = createAction(
    '[idempresa] idempresa',
    props<{id: number}>());
    
