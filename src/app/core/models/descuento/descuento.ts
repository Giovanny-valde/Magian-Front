import { habitacion } from "../habitacion/habitacion";

export interface  descuento{

    id : number ;
    idhabitacion? : habitacion;
    precio? : number ;
    inicio? : Date;
    fin? : Date;

}