import { createReducer,on } from "@ngrx/store";
import { persona } from "src/app/core/models/persona/persona";
import { personaState } from "src/app/core/models/persona/persona.state";
import { listarempresasucess, listarempresasucessid } from "src/app/core/state/actions/empresa.action";
import { listarPersonaSucces, listarPersonaSuccesId } from "../actions/persona.action";


// ESTADO INICIAL DEL REDUCER o DE LA BASE DE DATOS DE LA
export const initialState : personaState = {
  persona: [],
  personaPorId :
  {id:0,dni:'',nombre:'',apellido:'',correo:'',pais:'',telefono:''}
}
 export const PersonaReducer = createReducer(
  initialState,
  
  on(listarPersonaSucces, (state,{personas}) => {
    return {
      ... state,
      persona : personas
    };
  }),
  
  on(listarPersonaSuccesId, (state,{persona}) => {
    return {
      ...state,
      personaPorId: persona
    };
  })

   


  );
