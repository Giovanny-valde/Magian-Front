import { ActionReducerMap } from "@ngrx/store";
import { comentarioState } from "../models/comentario/comentario.state";
import { descuentoState } from "../models/descuento/descuento.state";
import { empresaState } from "../models/empresa/empresa.state";
import { habitacionState } from "../models/habitacion/habitacion.state";
import { personaState } from "../models/persona/persona.state";
import { reservaState } from "../models/reserva/reserva.state";
import { reserclienteState } from "../models/reserva_cliente/reserva_cliente.state";
import { ComentarioReducer } from "./reducers/comentario.reducer ";
import { DescuentoReducer } from "./reducers/descuento.reducer";
import { EmpresaReducer } from "./reducers/empresa.reducer";
import { HabitacionReducer } from "./reducers/habitacion.reducer";
import { PersonaReducer } from "./reducers/persona.reducer";
import { ReservaReducer } from "./reducers/reserva.reducer";
import { Reserva_clienteReducer } from "./reducers/reserva_cliente.reducer";
import { ProductoState } from "../models/producto/producto.state";
import { ProductoReducer } from "./reducers/producto/producto.reducer";
import { ProveedorState } from "../models/proveedor/proveedor.state";
import { ProveedorReducer } from "./reducers/proveedor/proveedor.reducer";
import { InventarioState } from "../models/inventario/inventario.state";
import { InventarioReducer } from "./reducers/inventario/inventario.reducer";
import { PersonaInventarioState } from "../models/persona_inventario/persoInventario.state";
import { PersonaInventarioReducer } from "./reducers/persona_inventario/persona_inventario.reducer";
export interface State {

    empresa: empresaState; // reducer
    habitacion : habitacionState; // reducer
    comentario : comentarioState; // reducer
    persona : personaState; // reducer
    reserva : reservaState; // reducer
    reserva_cliente : reserclienteState; // reducer
    descuento : descuentoState;
	Proveedor: ProveedorState;
    Producto: ProductoState;
    Inventario: InventarioState;
    PersonaInventario: PersonaInventarioState;

}

export const ROOT_REDUCERS : ActionReducerMap<State> = {
    empresa: EmpresaReducer,
    habitacion : HabitacionReducer,
    comentario  : ComentarioReducer,
    persona : PersonaReducer,
    reserva : ReservaReducer,
    reserva_cliente : Reserva_clienteReducer,
    descuento : DescuentoReducer,
	Proveedor: ProveedorReducer,
    Producto: ProductoReducer,
    Inventario: InventarioReducer,
    PersonaInventario: PersonaInventarioReducer
}
