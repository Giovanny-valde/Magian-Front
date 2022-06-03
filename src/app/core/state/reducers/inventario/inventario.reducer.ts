import { createReducer,on } from "@ngrx/store";
import { Inventario } from "src/app/core/models/inventario/inventario";
import { InventarioState } from "src/app/core/models/inventario/inventario.state";
import { listarInventario_success, listarIdInventario_success } from "src/app/core/state/actions/inventario/inventario.action";


// ESTADO INICIAL DEL REDUCER
export const initialState : InventarioState = {
    inventario: [],
    inventarioId : {
        id:0,
        idProducto:{
          id:0,
          nombre:"",
          marca:"",
          idProveedor:{
            id:0,
            correo:"",
            direccion:"",
            telefono:"",
          }
        },
        cantidad:0,
        precio:0,
        fecha:"",
        tipo:''

    }
};

 export const InventarioReducer = createReducer(
  initialState,
  on(listarInventario_success, (state,{inventarios}) => {
    return {
      ... state,
      inventario: inventarios
    };
  }),

  on(listarIdInventario_success, (state,{inventario}) => {
    return {
      ...state,
      inventarioId: inventario
    };
  })




  );
