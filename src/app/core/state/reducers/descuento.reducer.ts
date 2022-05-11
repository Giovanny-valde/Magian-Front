import { createReducer,on } from "@ngrx/store";
import { descuento } from "src/app/core/models/descuento/descuento";
import { descuentoState } from "src/app/core/models/descuento/descuento.state";
import { listarDescuentoSucces, listarDescuentoSuccesId } from "../actions/descuento.action";
import { idempresa } from "../actions/empresa.action";


// ESTADO INICIAL DEL REDUCER o DE LA BASE DE DATOS DE LA
export const initialState: descuentoState = {
  descuento: [],
  descuentoPorId: {id: 0,precio: 0,inicio: new Date(),fin: new Date(),
  idhabitacion: {id: 0,nombre: "",precio: 0,descripcion: "",cantidadHabitacion: 0,cantidadPersona: 0,
  idempresa: {id: 0,ciudad: '',descripcion: '',pais: '',imagen: '',tipo: '',activo: false
      }
    }
  }
}

 export const DescuentoReducer = createReducer(
  initialState,
  
  on(listarDescuentoSucces, (state,{descuentos}) => {
    return {
      ... state,
      descuento : descuentos
    };
  }),
  
  on(listarDescuentoSuccesId, (state,{descuento}) => {
    return {
      ...state,
      descuentoPorId: descuento
    };
  })

  
  );
