import { Producto } from "../producto/producto";

export class Inventario {
    id: number = 0;
    idProducto!: Producto;
    precio: number = 0;
    cantidad: number = 0;
    fecha: string = '';
    tipo: string = '';
}
