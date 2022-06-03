import {  createAction, props } from '@ngrx/store';
import { Inventario } from 'src/app/core/models/inventario/inventario';

//LISTAR
export const listarInventario = createAction(
    '[cargando ] cargar inventario'
    );

export const listarInventario_success = createAction(
    '[inventarios] inventarios cargados',
     props<{ inventarios : Inventario[] }>()
);

//LISTAR POR ID
export const listarIdInventario = createAction(
    '[cargando ] cargar inventario por id',
    props<{ id : number }>());

export const listarIdInventario_success = createAction(
    '[inventarios] producto inventario por id',
        props<{ inventario : Inventario }>()
);
//AGREGAR
export const agregarInventario = createAction(
    '[agregar] agregar inventario',
    props<{inventario: Inventario}>());

//ACTUALIZAR
export const actualizarInventario = createAction(
    '[actualizar] actualizar inventario',
    props<{inventario: Inventario}>());

//ELIMINAR
export const eliminarInventario = createAction(
    '[eliminar] eliminar inventario',
    props<{id: number}>());
