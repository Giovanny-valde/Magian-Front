import { inventario } from "../inventario/inventario";
import { personaHabitacion } from "../persona_habitacion/persohabitacion";
import { personaInventario } from "../persona_inventario/persoinventario";
import { reserva } from "../reserva/reserva";

export class factura{
    id : number = 0;
    idinventario! : inventario;
    idreserva! : reserva;
    personainventario! : personaInventario;
    persohabitacion! : personaHabitacion;
}