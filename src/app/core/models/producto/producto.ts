import { Proveedor } from '../proveedor/proveedor';

export class Producto{
    id : number = 0;
    idProveedor! : Proveedor;
    nombre : string = '';
    marca : string = '';
}