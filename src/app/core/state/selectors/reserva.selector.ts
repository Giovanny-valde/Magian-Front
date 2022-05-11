import { createSelector } from "@ngrx/store";
import { reservaState } from "src/app/core/models/reserva/reserva.state";
import { State } from "../app.state";

export const selectReserva = (state: State) => state.reserva;

export const selectReservaList = createSelector(
    selectReserva,
    (state: reservaState) => state.reserva
);

export const selectReservaPorId = createSelector(
    selectReserva,
    (state: reservaState) => state.reservaPorId
);