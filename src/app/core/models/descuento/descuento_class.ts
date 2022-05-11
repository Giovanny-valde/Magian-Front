import { Store } from "@ngrx/store";
import { updateDescuento } from "../../state/actions/descuento.action";
import { updateempresa } from "../../state/actions/empresa.action";
import { habitacion } from "../habitacion/habitacion";
import { descuento } from "./descuento";
// import { empresa } from "./empresa";

export class descuentoClass{
    
    id : number ;
    idhabitacion : number = 0 ;
    precio : number = 0 ;
    inicio! : Date;
    fin! : Date;
    stores : any ;

    constructor(public data : any , public store: Store<any>){  
    
        this.id = data.id;
        this.idhabitacion = data.idhabitacion;
        this.precio = data.precio;
        this.inicio = data.inicio;
        this.fin = data.fin;
        this.stores = store;


    }

    public descuento() : descuento {
        let Habitacion : habitacion ={
            id : this.idhabitacion
        }

        let Descuento : descuento ={
            id : this.id,
            idhabitacion : Habitacion,
            precio : this.precio,
            inicio : this.inicio,
            fin : this.fin,

        }
        return Descuento;
    }

    public agregarHabitacion() {
        let desceunto = this.descuento();
        this.stores.dispatch(updateDescuento({descuento: desceunto}));
    }

    public updateDescuento() {
       let descuento = this.descuento();
        this.stores.dispatch(updateDescuento({descuento: descuento}));
    }

    

}