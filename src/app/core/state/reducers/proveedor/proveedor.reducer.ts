import { createReducer,on } from "@ngrx/store";
import { Proveedor } from "src/app/core/models/proveedor/proveedor";
import { ProveedorState } from "src/app/core/models/proveedor/proveedor.state";
import { listarProveedor_success, listarIdProveedor_success } from "src/app/core/state/actions/proveedor/proveedor.action";

// ESTADO INICIAL DEL REDUCER
export const initialState : ProveedorState = {
    proveedor: [],
    proveedorId : {
        id: 0,
        correo: "",
        direccion: "",
        telefono: ""
    }
};

 export const ProveedorReducer = createReducer(
  initialState,
  on(listarProveedor_success, (state,{proveedores}) => {
    return {
      ... state,
      proveedor: proveedores
    };
  }),
  
  on(listarIdProveedor_success, (state,{proveedor}) => {
    return {
      ...state,
      proveedorId: proveedor
    };
  })

   


  );
