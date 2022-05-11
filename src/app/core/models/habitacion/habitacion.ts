import { empresa } from "../empresa/empresa";

export interface habitacion{

    id : number ;
    idempresa? : empresa ;
    nombre? : string ;
    descripcion? : string ;
    cantidadHabitacion?: number ;
    cantidadPersona? : number ;
    precio? : number ;


}