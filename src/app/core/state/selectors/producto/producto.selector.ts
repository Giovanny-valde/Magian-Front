import { createSelector } from "@ngrx/store";
import { ProductoState } from "src/app/core/models/producto/producto.state";
import { State } from "src/app/core/state/app.state";

export const selectProducto = (state: State) => state.Producto;

export const selectProductoList = createSelector(
    selectProducto,
    (state: ProductoState) => state.producto
);

export const selectProductoId = createSelector(
    selectProducto,
    (state: ProductoState) => state.productoId
);