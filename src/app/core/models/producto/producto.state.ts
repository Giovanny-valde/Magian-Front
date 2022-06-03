import { Producto } from "./producto";

export interface ProductoState {
    producto: ReadonlyArray<Producto>;
    productoId: Producto;
  }