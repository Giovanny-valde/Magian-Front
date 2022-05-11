import { proveedor } from "../proveedor/proveedor";

export class producto{
    id : number = 0;
    idproveedor! : proveedor
    nombre : string = '';
    marca : string = '';
}