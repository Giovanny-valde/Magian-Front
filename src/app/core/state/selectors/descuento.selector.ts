import { createSelector } from "@ngrx/store";
import { descuentoState } from "src/app/core/models/descuento/descuento.state";
import { State } from "../app.state";

export const selectDescuento = (state: State) => state.descuento;

export const selectDescuentoList = createSelector(
    selectDescuento,
    (state: descuentoState) => state.descuento
);

export const selectDescuentoPorId = createSelector(
    selectDescuento,
    (state: descuentoState) => state.descuentoPorId
);