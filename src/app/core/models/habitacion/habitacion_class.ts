import { Store } from "@ngrx/store";
import { addHabitacion, updateHabitacion } from "../../state/actions/habitacion.action";
import { empresa } from "../empresa/empresa";
import { habitacion } from "./habitacion";

export class habitacionClass{
    
    id : number = 0; 
    idempresa! : number ;
    nombre : string  = '';
    descripcion : string = '';
    cantidadHabitacion: number = 0;
    cantidadPersona: number = 0;
    precio : number = 0;
    stores : any ;

    constructor(public data : any , public store: Store<any>){  
     
        this.id = data.id;
        this.idempresa = data.idempresa;
        this.nombre = data.nombre;
        this.descripcion = data.descripcion;
        this.cantidadHabitacion = data.cantidadHabitacion;
        this.cantidadPersona = data.cantidadPersona;
        this.precio = data.precio;
        this.stores = store;
      
    }


    public habitacion() : habitacion {
        let Empresa : empresa = {
            id : this.idempresa,
        }
        console.log(Empresa)
        let Habitacion : habitacion ={
            id : this.id,
            idempresa : Empresa,
            nombre : this.nombre,
            descripcion : this.descripcion,
            cantidadHabitacion : this.cantidadHabitacion,
            cantidadPersona : this.cantidadPersona,
            precio : this.precio
        }
        return Habitacion;
    }


    public updateHabitacion() {
        let habitacion =  this.habitacion();
        this.stores.dispatch(updateHabitacion({habitacion: habitacion}));
    }

    public guardarHabitacion() {
        let habitacion =  this.habitacion();
        this.stores.dispatch(addHabitacion({habitacion: habitacion}));
    }


}