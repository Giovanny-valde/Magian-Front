import {  createAction, props } from '@ngrx/store';
import { reserva } from 'src/app/core/models/reserva/reserva';


//LISTAR
export const listarReserva = createAction(
    '[cargando ] cargar reserva' 
    );
    
export const listarReservaSucces = createAction(
    '[reservas] reservas cargadas',
     props<{ reservas : reserva[] }>()
);

//LISTAR POR ID
export const listarReservaId = createAction(
    '[cargando ] cargar Reserva por id',
    props<{ id : number }>());

export const listarReservaSuccesId = createAction(
    '[Reservas] Reserva cargada por id',
        props<{ reserva : reserva }>()
);
//AGREGAR
export const addReserva = createAction(
    '[agregar] agregar Reserva',
    props<{reserva: reserva}>());

//ACTUALIZAR
export const updateReserva = createAction(
    '[actualizar] actualizar Reserva',
    props<{reserva: reserva}>());

//ELIMINAR
export const deleteReserva = createAction(
    '[eliminar] eliminar Reserva',
    props<{id: number}>());
    

    
