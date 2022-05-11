import {  createAction, props } from '@ngrx/store';
import { resercliente } from 'src/app/core/models/reserva_cliente/resercliente';


//LISTAR
export const listarReserva_cliente = createAction(
    '[cargando ] cargar resercliente' 
    );
    
export const listarReserva_clienteSucces = createAction(
    '[reserclientes] reserclientes cargadas',
     props<{ reserclientes : resercliente[] }>()
);

//LISTAR POR ID
export const listarReserva_clienteId = createAction(
    '[cargando ] cargar Reserva_cliente por id',
    props<{ id : number }>());

export const listarReserva_clienteSuccesId = createAction(
    '[Reserva_clientes] Reserva_cliente cargada por id',
        props<{ resercliente : resercliente }>()
);
//AGREGAR
export const addReserva_cliente = createAction(
    '[agregar] agregar Reserva_cliente',
    props<{resercliente: resercliente}>());

//ACTUALIZAR
export const updateReserva_cliente = createAction(
    '[actualizar] actualizar Reserva_cliente',
    props<{resercliente: resercliente}>());

//ELIMINAR
export const deleteReserva_cliente = createAction(
    '[eliminar] eliminar Reserva_cliente',
    props<{id: number}>());
    

    
