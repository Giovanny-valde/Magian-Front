import { Store } from "@ngrx/store";
import { updateempresa } from "../../state/actions/empresa.action";
import { empresa } from "./empresa";

export class empresaClass{
    
    id : number = 0;
    ciudad : string = '';
    descripcion : string = '';
    pais : string = '';
    tipo : string = '';
    imagen : any  ;
    activo : boolean = true;
    stores : any ;

    constructor(public data : any , public store: Store<any>){  
        
        this.id = data.id;
        this.ciudad = data.ciudad;
        this.descripcion = data.descripcion;
        this.pais = data.pais;
        this.tipo = data.tipo;
        this.imagen = data.imagen;
        this.activo = data.activo;
        this.stores = store;
        // this.activo = data.activo;
    }

    public empresa() : empresa {
        let Empresa : empresa ={
            id : this.id,
            ciudad : this.ciudad,
            descripcion : this.descripcion,
            pais : this.pais,
            tipo : this.tipo,
            imagen : this.imagen,
            activo : this.activo
        }
        return Empresa;
    }



    public updateEmpresa() {
       let empresa = this.empresa();
        this.stores.dispatch(updateempresa({empresa: empresa}));
    }

    

}