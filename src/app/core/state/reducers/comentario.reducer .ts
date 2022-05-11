import { createReducer,on } from "@ngrx/store";
import { comentario } from "src/app/core/models/comentario/comentario";
import { comentarioState } from "src/app/core/models/comentario/comentario.state";
import { listarempresasucess, listarempresasucessid } from "src/app/core/state/actions/empresa.action";
import { listarComentarioSucces, listarComentarioSuccesId } from "../actions/comentario.action";


// ESTADO INICIAL DEL REDUCER o DE LA BASE DE DATOS DE LA
export const initialState : comentarioState = {
  comentario: [],
  comentarioPorId :
  {id:0,comentario:'',fecha:new Date(),valoracion:0,
  idpersona:{id:0,dni:'',nombre:'',apellido:'',correo:'',pais:'',telefono:''},
  idempresa:{id:0,ciudad:'',descripcion:'',pais:'',tipo:'',imagen:0,activo:false}}
}


 export const ComentarioReducer = createReducer(
  initialState,
  
  on(listarComentarioSucces, (state,{comentarios}) => {
    return {
      ... state,
      comentario : comentarios
    };
  }),
  
  on(listarComentarioSuccesId, (state,{comentario}) => {
    return {
      ...state,
      comentarioPorId: comentario
    };
  })

   


  );
