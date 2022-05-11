import { reserva } from "./reserva";

export interface reservaState {
    reserva: ReadonlyArray<reserva>;
    reservaPorId: reserva;
  }