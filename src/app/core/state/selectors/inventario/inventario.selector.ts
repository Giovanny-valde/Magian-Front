import { createSelector } from "@ngrx/store";
import { InventarioState } from "src/app/core/models/inventario/inventario.state";
import { State } from "src/app/core/state/app.state";

export const selectInventario = (state: State) => state.Inventario;

export const selectInventarioList = createSelector(
  selectInventario,
    (state: InventarioState) => state.inventario
);

export const selectInventarioId = createSelector(
  selectInventario,
    (state: InventarioState) => state.inventarioId
);
