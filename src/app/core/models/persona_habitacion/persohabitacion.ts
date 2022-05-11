import { habitacion } from "../habitacion/habitacion";
import { persona } from "../persona/persona";

export class personaHabitacion{
    id : number = 0;
    idhabitacion! : habitacion;
    idpersona! : persona;
}