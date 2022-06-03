import { createReducer,on } from "@ngrx/store";
import { personaInventario } from "src/app/core/models/persona_inventario/persoinventario";
import { PersonaInventarioState } from "src/app/core/models/persona_inventario/persoInventario.state";
import { listar_success, listarId_success } from "src/app/core/state/actions/persona_inventario/persona_inventario.action";

export const initialState : PersonaInventarioState = {
  personaInventario: [],
  personaInventarioId : {
    id: 0,
    idinventario: {
      id: 0,
      idProducto:{
        id: 0,
        idProveedor:{
          id: 0,
          correo: "",
          direccion: "",
          telefono: ""
        },
        nombre: "",
        marca: "",
      },
      cantidad: 0,
      precio: 0,
      fecha: "",
      tipo: '',
    },
    idpersona:{
      id: 0,
      dni: "",
      nombre: "",
      apellido: "",
      correo: "",
      pais: "",
      telefono: ""
    }
  }
};
export const PersonaInventarioReducer = createReducer(
  initialState,
  on(listar_success, (state,{personaInventario}) => {
    return {
      ... state,
      personaInventario: personaInventario
    };
  }),
  on(listarId_success, (state,{personaInventario}) => {
    return {
      ...state,
      personaInventarioId: personaInventario
    };
}));

