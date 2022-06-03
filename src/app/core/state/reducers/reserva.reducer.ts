import { createReducer,on } from "@ngrx/store";
import { reservaState } from "src/app/core/models/reserva/reserva.state";
import { listarReservaSucces, listarReservaSuccesId } from "../actions/reserva.action";


// ESTADO INICIAL DEL REDUCER o DE LA BASE DE DATOS DE LA
export const initialState : reservaState = {
  reserva: [],
  reservaPorId :{
    id: 0,checkin: new Date(), checkout: new Date() , cantidad : 0
  }
}


 export const ReservaReducer = createReducer(
  initialState,
  
  on(listarReservaSucces, (state,{reservas}) => {
    return {
      ... state,
      reserva : reservas
    };
  }),
  
  on(listarReservaSuccesId, (state,{reserva}) => {
    return {
      ...state,
      reservaPorId: reserva
    };
  })

   


  );
