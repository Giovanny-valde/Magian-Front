import {  createAction, props } from '@ngrx/store';
import { descuento  } from 'src/app/core/models/descuento/descuento';


//LISTAR
export const listarDescuento = createAction(
    '[cargando ] cargar descuento ' 
    );
    
export const listarDescuentoSucces = createAction(
    '[descuentos] descuentos cargadas',
     props<{ descuentos : descuento [] }>()
);

//LISTAR POR ID
export const listarDescuentoId = createAction(
    '[cargando ] cargar Descuento por id',
    props<{ id : number }>());

export const listarDescuentoSuccesId = createAction(
    '[Descuentos] Descuento cargada por id',
        props<{ descuento  : descuento  }>()
);
//AGREGAR
export const addDescuento = createAction(
    '[agregar] agregar Descuento',
    props<{descuento : descuento }>());

//ACTUALIZAR
export const updateDescuento = createAction(
    '[actualizar] actualizar Descuento',
    props<{descuento : descuento }>());

//ELIMINAR
export const deleteDescuento = createAction(
    '[eliminar] eliminar Descuento',
    props<{id: number}>());
    

    
