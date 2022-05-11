import { habitacion } from "./habitacion";

export interface habitacionState {
    habitacion: ReadonlyArray<habitacion>;
    habitacionPorId: habitacion;
  }