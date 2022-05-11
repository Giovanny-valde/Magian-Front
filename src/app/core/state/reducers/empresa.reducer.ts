import { createReducer,on } from "@ngrx/store";
import { empresa } from "src/app/core/models/empresa/empresa";
import { empresaState } from "src/app/core/models/empresa/empresa.state";
import { idempresa, listarempresasucess, listarempresasucessid } from "src/app/core/state/actions/empresa.action";


// ESTADO INICIAL DEL REDUCER o DE LA BASE DE DATOS DE LA
export const initialState : empresaState = {
    empresa: [],
    empresaPorId : {id: 0,ciudad:'' , descripcion:'',pais:'', tipo: '', imagen:0, activo: true},
    idEmpresa: 0
  };

 export const EmpresaReducer = createReducer(
  initialState,
  
  on(listarempresasucess, (state,{empresas}) => {
    return {
      ... state,
      empresa: empresas
    };
  }),
  
  on(listarempresasucessid, (state,{empresa}) => {
    return {
      ...state,
      empresaPorId: empresa
    };
  }),

  on(idempresa, (state,{id}) => {
    return {
      ...state,
      idEmpresa: id
    };
  }),
);
