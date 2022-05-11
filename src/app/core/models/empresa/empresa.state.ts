import { empresa } from "./empresa";

export interface empresaState {
    empresa: ReadonlyArray<empresa>;
    empresaPorId: empresa;
    idEmpresa: number;
  }