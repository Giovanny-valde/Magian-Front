import { comentario } from "./comentario";

export interface comentarioState {
    comentario: ReadonlyArray<comentario>;
    comentarioPorId: comentario;
  }