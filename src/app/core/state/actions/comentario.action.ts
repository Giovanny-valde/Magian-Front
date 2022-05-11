import {  createAction, props } from '@ngrx/store';
import { comentario } from 'src/app/core/models/comentario/comentario';


//LISTAR
export const listarComentario = createAction(
    '[cargando ] cargar comentario' 
    );
    
export const listarComentarioSucces = createAction(
    '[comentarios] comentarios cargadas',
     props<{ comentarios : comentario[] }>()
);

//LISTAR POR ID
export const listarComentarioId = createAction(
    '[cargando ] cargar Comentario por id',
    props<{ id : number }>());

export const listarComentarioSuccesId = createAction(
    '[Comentarios] Comentario cargada por id',
        props<{ comentario : comentario }>()
);
//AGREGAR
export const addComentario = createAction(
    '[agregar] agregar Comentario',
    props<{comentario: comentario}>());

//ACTUALIZAR
export const updateComentario = createAction(
    '[actualizar] actualizar Comentario',
    props<{comentario: comentario}>());

//ELIMINAR
export const deleteComentario = createAction(
    '[eliminar] eliminar Comentario',
    props<{id: number}>());
    

    
