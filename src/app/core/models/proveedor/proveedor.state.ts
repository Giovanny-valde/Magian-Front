import { Proveedor } from "./proveedor";

export interface ProveedorState {
    proveedor: ReadonlyArray<Proveedor>;
    proveedorId: Proveedor;
  }