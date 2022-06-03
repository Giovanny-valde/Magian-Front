import {  createAction, props } from '@ngrx/store';
import { Producto } from 'src/app/core/models/producto/producto';

//LISTAR
export const listarProducto = createAction(
    '[cargando ] cargar producto' 
    );
    
export const listarProducto_success = createAction(
    '[productos] productos cargados',
     props<{ productos : Producto[] }>()
);

//LISTAR POR ID
export const listarIdProducto = createAction(
    '[cargando ] cargar producto por id',
    props<{ id : number }>());

export const listarIdProducto_success = createAction(
    '[productos] producto cargado por id',
        props<{ producto : Producto }>()
);
//AGREGAR
export const agregarProducto = createAction(
    '[agregar] agregar proveedor',
    props<{producto: Producto}>());

//ACTUALIZAR
export const actualizarProducto = createAction(
    '[actualizar] actualizar proveedor',
    props<{producto: Producto}>());

//ELIMINAR
export const eliminarProducto = createAction(
    '[eliminar] eliminar proveedor',
    props<{id: number}>());
