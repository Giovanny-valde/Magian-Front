import { createReducer,on } from "@ngrx/store";
import { Producto } from "src/app/core/models/producto/producto";
import { ProductoState } from "src/app/core/models/producto/producto.state";
import { listarProducto_success, listarIdProducto_success } from "src/app/core/state/actions/producto/producto.action";
import { ProveedorState } from "src/app/core/models/proveedor/proveedor.state";


// ESTADO INICIAL DEL REDUCER
export const initialState : ProductoState = {
    producto: [],
    productoId : {
        id:0,
        idProveedor:{
          id:0,
          correo:"",
          direccion:"",
          telefono:"",
        },
        nombre:"",
        marca:""
    }
};

 export const ProductoReducer = createReducer(
  initialState,
  on(listarProducto_success, (state,{productos}) => {
    return {
      ... state,
      producto: productos
    };
  }),
  
  on(listarIdProducto_success, (state,{producto}) => {
    return {
      ...state,
      productoId: producto
    };
  })

   


  );
