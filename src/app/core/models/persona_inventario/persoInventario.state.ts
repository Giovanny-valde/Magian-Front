import { personaInventario } from "./persoinventario";

export interface PersonaInventarioState {
    personaInventario: ReadonlyArray<personaInventario>;
    personaInventarioId: personaInventario;
  }
