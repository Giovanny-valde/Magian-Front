import { empresa } from "../empresa/empresa";
import { producto } from "../producto/producto";

export class inventario{

    id : number = 0;
    idproducto! : producto ;
    cantidad : number = 0;
    precio : number = 0;
    idempresa! : empresa ;
    fecha! : Date ;
    tipo : string = '';

}