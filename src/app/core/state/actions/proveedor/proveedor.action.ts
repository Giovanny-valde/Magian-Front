import {  createAction, props } from '@ngrx/store';
import { Proveedor } from 'src/app/core/models/proveedor/proveedor';

//LISTAR
export const listarProveedor = createAction(
    '[cargando ] cargar proveedor' 
    );
    
export const listarProveedor_success = createAction(
    '[proveedores] proveedores cargados',
     props<{ proveedores : Proveedor[] }>()
);

//LISTAR POR ID
export const listarIdProveedor = createAction(
    '[cargando ] cargar proveedor por id',
    props<{ id : number }>());

export const listarIdProveedor_success = createAction(
    '[proveedores] proveedor cargado por id',
        props<{ proveedor : Proveedor }>()
);
//AGREGAR
export const agregarProveedor = createAction(
    '[agregar] agregar proveedor',
    props<{proveedor: Proveedor}>());

//ACTUALIZAR
export const actualizarProveedor = createAction(
    '[actualizar] actualizar proveedor',
    props<{proveedor: Proveedor}>());

//ELIMINAR
export const eliminarProveedor = createAction(
    '[eliminar] eliminar proveedor',
    props<{id: number}>());
