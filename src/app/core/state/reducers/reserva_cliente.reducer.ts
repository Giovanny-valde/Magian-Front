import { createReducer,on } from "@ngrx/store";
import { reserclienteState } from "../../models/reserva_cliente/reserva_cliente.state";
import { listarReserva_clienteSucces, listarReserva_clienteSuccesId } from "../actions/reserva_cliente.action";


// ESTADO INICIAL DEL REDUCER o DE LA BASE DE DATOS DE LA
export const initialState : reserclienteState = {
  reserva_cliente: [],
  reserva_clientePorId :{
    id:0,
    idpersona:{id:0,nombre:'',apellido:'',dni:'',telefono:'',correo:'',pais:''},
    idreserva:{id: 0,checkin: new Date(), checkout: new Date(), cantidad: 0},uso:0
  }
}


 export const Reserva_clienteReducer = createReducer(
  initialState,
  
  on(listarReserva_clienteSucces, (state,{reserclientes}) => {
    return {
      ... state,
      reserva_cliente : reserclientes
    };
  }),
  
  on(listarReserva_clienteSuccesId, (state,{resercliente}) => {
    return {
      ...state,
      reserva_clientePorId: resercliente
    };
  })

   


  );
