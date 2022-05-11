import {  createAction, props } from '@ngrx/store';
import { habitacion } from 'src/app/core/models/habitacion/habitacion';


//LISTAR
export const listarHabitacion = createAction(
    '[cargando ] cargar habitacion' 
    );
    
export const listarHabitacionSucces = createAction(
    '[habitaciones] habitaciones cargadas',
     props<{ habitaciones : habitacion[] }>()
);

//LISTAR POR ID
export const listarHabitacionId = createAction(
    '[cargando ] cargar Habitacion por id',
    props<{ id : number }>());

export const listarHabitacionSuccesId = createAction(
    '[Habitaciones] Habitacion cargada por id',
        props<{ habitacion : habitacion }>()
);
//AGREGAR
export const addHabitacion = createAction(
    '[agregar] agregar Habitacion',
    props<{habitacion: habitacion}>());

//ACTUALIZAR
export const updateHabitacion = createAction(
    '[actualizar] actualizar Habitacion',
    props<{habitacion: habitacion}>());

//ELIMINAR
export const deleteHabitacion = createAction(
    '[eliminar] eliminar Habitacion',
    props<{id: number}>());
    

    
