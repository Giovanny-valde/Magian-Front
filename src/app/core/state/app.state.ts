import { ActionReducerMap } from "@ngrx/store";
import { comentarioState } from "../models/comentario/comentario.state";
import { descuentoState } from "../models/descuento/descuento.state";
import { empresaState } from "../models/empresa/empresa.state";
import { habitacionState } from "../models/habitacion/habitacion.state";
import { personaState } from "../models/persona/persona.state";
import { reservaState } from "../models/reserva/reserva.state";
import { reserclienteState } from "../models/reserva_cliente/reserva_cliente.state";
import { ComentarioReducer } from "./reducers/comentario.reducer ";
import { DescuentoReducer } from "./reducers/descuento.reducer";
import { EmpresaReducer } from "./reducers/empresa.reducer";
import { HabitacionReducer } from "./reducers/habitacion.reducer";
import { PersonaReducer } from "./reducers/persona.reducer";
import { ReservaReducer } from "./reducers/reserva.reducer";
import { Reserva_clienteReducer } from "./reducers/reserva_cliente.reducer";

export interface State {
    
    empresa: empresaState; // reducer
    habitacion : habitacionState; // reducer
    comentario : comentarioState; // reducer
    persona : personaState; // reducer
    reserva : reservaState; // reducer
    reserva_cliente : reserclienteState; // reducer
    descuento : descuentoState;
    
}

export const ROOT_REDUCERS : ActionReducerMap<State> = {
    empresa: EmpresaReducer,
    habitacion : HabitacionReducer,
    comentario  : ComentarioReducer,
    persona : PersonaReducer,
    reserva : ReservaReducer,
    reserva_cliente : Reserva_clienteReducer,
    descuento : DescuentoReducer
}