import { createSelector } from "@ngrx/store";
import { PersonaInventarioState } from "src/app/core/models/persona_inventario/persoInventario.state";
import { State } from "src/app/core/state/app.state";

export const selectPersonaInventario = (state: State) => state.PersonaInventario;

export const selectPersonaInventarioList = createSelector(
    selectPersonaInventario,
    (state: PersonaInventarioState) => state.personaInventario
);

export const selectPersonaInventarioId = createSelector(
    selectPersonaInventario,
    (state: PersonaInventarioState) => state.personaInventario
);
