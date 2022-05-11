import { createSelector } from "@ngrx/store";
import { reserclienteState } from "src/app/core/models/reserva_cliente/reserva_cliente.state";
import { State } from "../app.state";

export const selectReserva_cliente = (state: State) => state.reserva_cliente;

export const selectReserva_clienteList = createSelector(
    selectReserva_cliente,
    (state: reserclienteState) => state.reserva_cliente
);

export const selectReserva_clientePorId = createSelector(
    selectReserva_cliente,
    (state: reserclienteState) => state.reserva_clientePorId
);