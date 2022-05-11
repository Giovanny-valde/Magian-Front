import { createReducer,on } from "@ngrx/store";
import { habitacion } from "src/app/core/models/habitacion/habitacion";
import { habitacionState } from "src/app/core/models/habitacion/habitacion.state";
import { listarempresasucess, listarempresasucessid } from "src/app/core/state/actions/empresa.action";
import { listarHabitacionSucces, listarHabitacionSuccesId } from "../actions/habitacion.action";


// ESTADO INICIAL DEL REDUCER o DE LA BASE DE DATOS DE LA
export const initialState : habitacionState = {
  habitacion: [],
  habitacionPorId :
  {id:0,nombre:'',precio:0,descripcion:'',cantidadHabitacion:0,cantidadPersona:0,
  idempresa:{id: 0,ciudad:'' , descripcion:'',pais:'', tipo: '', imagen: 0, activo: true}}
};

 export const HabitacionReducer = createReducer(
  initialState,
  
  on(listarHabitacionSucces, (state,{habitaciones}) => {
    return {
      ... state,
      habitacion : habitaciones
    };
  }),
  
  on(listarHabitacionSuccesId, (state,{habitacion}) => {
    return {
      ...state,
      habitacionPorId: habitacion
    };
  })

   


  );
