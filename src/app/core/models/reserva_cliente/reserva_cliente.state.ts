import { resercliente } from "./resercliente";

export interface reserclienteState {
    reserva_cliente: ReadonlyArray<resercliente>;
    reserva_clientePorId: resercliente;
  }