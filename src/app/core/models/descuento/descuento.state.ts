import { descuento } from "./descuento";

export interface descuentoState {
    descuento: ReadonlyArray<descuento>;
    descuentoPorId: descuento;
  }