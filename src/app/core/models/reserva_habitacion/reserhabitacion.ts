import { habitacion } from "../habitacion/habitacion";
import { reserva } from "../reserva/reserva";

export class reservahabitacion{
    id : number = 0;
    idhabitacion! : habitacion;
    idreserva! : reserva;
}