//import { EmpresaService } from "@services/empresa/EmpresaService";

// import {  Store } from "@ngrx/store";
// import { updateempresa } from "../../state/actions/empresa.action";
// import { State } from "../../state/app.state";

export interface empresa{
    
    id : number ;
    ciudad?: string ;
    descripcion? : string ;
    pais? : string;
    tipo? : string;
    imagen? : any  ;
    activo? : boolean;

    // constructor( public data?: any ) {
    //     this.id = data.id;
    //     this.ciudad = data.ciudad;
    //     this.descripcion = data.descripcion;
    //     this.pais = data.pais;
    //     this.tipo = data.tipo;
    //     this.imagen = data.imagen;
    //     this.activo = data.activo;
    // }




}