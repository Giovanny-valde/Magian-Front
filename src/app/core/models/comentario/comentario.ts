import { persona } from "../persona/persona";
import { empresa } from "../empresa/empresa";

export class comentario{
    id : number = 0;
    comentario : string = '';
    fecha! : Date;
    valoracion : number = 0;
    idpersona! : persona ;
    idempresa! : empresa ;

}