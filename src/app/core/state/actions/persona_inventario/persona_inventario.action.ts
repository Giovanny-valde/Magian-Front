import {  createAction, props } from '@ngrx/store';
import { personaInventario } from 'src/app/core/models/persona_inventario/persoinventario';

//LISTAR
export const listar = createAction(
    '[cargando ] cargar persona_inventario'
    );

export const listar_success = createAction(
    '[persona_inventarios] persona_inventarios cargados',
     props<{ personaInventario : personaInventario[] }>()
);

//LISTAR POR ID
export const listarId = createAction(
    '[cargando ] cargar persona inventario por id',
    props<{ id : number }>());

export const listarId_success = createAction(
    '[persona_inventarios] persona inventario por id',
        props<{ personaInventario : personaInventario }>()
);
//AGREGAR
export const agregar = createAction(
    '[agregar] agregar persona inventario',
    props<{personaInventario: personaInventario}>());

//ACTUALIZAR
export const actualizar = createAction(
    '[actualizar] actualizar persona inventario',
    props<{personaInventario: personaInventario}>());

//ELIMINAR
export const eliminar = createAction(
    '[eliminar] eliminar persona inventario',
    props<{id: number}>());
