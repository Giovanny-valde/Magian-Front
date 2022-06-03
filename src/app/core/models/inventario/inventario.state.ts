import { Inventario } from "./inventario";

export interface InventarioState {
    inventario: ReadonlyArray<Inventario>;
    inventarioId: Inventario;
}
