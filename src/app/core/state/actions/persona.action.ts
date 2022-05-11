import {  createAction, props } from '@ngrx/store';
import { persona } from 'src/app/core/models/persona/persona';


//LISTAR
export const listarPersona = createAction(
    '[cargando ] cargar persona' 
    );
    
export const listarPersonaSucces = createAction(
    '[personas] personas cargadas',
     props<{ personas : persona[] }>()
);

//LISTAR POR ID
export const listarPersonaId = createAction(
    '[cargando ] cargar Persona por id',
    props<{ id : number }>());

export const listarPersonaSuccesId = createAction(
    '[Personas] Persona cargada por id',
        props<{ persona : persona }>()
);
//AGREGAR
export const addPersona = createAction(
    '[agregar] agregar Persona',
    props<{persona: persona}>());

//ACTUALIZAR
export const updatePersona = createAction(
    '[actualizar] actualizar Persona',
    props<{persona: persona}>());

//ELIMINAR
export const deletePersona = createAction(
    '[eliminar] eliminar Persona',
    props<{id: number}>());
    

    
