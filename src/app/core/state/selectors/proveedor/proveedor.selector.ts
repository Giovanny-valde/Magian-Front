import { createSelector } from "@ngrx/store";
import { ProveedorState } from "src/app/core/models/proveedor/proveedor.state";
import { State } from "src/app/core/state/app.state";

export const selectProveedor = (state: State) => state.Proveedor;

export const selectProveedorList = createSelector(
    selectProveedor,
    (state: ProveedorState) => state.proveedor
);

export const selectProveedorId = createSelector(
    selectProveedor,
    (state: ProveedorState) => state.proveedorId
);