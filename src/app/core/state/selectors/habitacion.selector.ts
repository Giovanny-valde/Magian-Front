import { createSelector } from "@ngrx/store";
import { habitacionState } from "src/app/core/models/habitacion/habitacion.state";
import { State } from "../app.state";

export const selectHabitacion = (state: State) => state.habitacion;

export const selectHabitacionList = createSelector(
    selectHabitacion,
    (state: habitacionState) => state.habitacion
);

export const selectHabitacionPorId = createSelector(
    selectHabitacion,
    (state: habitacionState) => state.habitacionPorId
);