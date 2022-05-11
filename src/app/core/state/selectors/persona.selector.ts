import { createSelector } from "@ngrx/store";
import { personaState } from "src/app/core/models/persona/persona.state";
import { State } from "../app.state";

export const selectPersona = (state: State) => state.persona;

export const selectPersonaList = createSelector(
    selectPersona,
    (state: personaState) => state.persona
);

export const selectPersonaPorId = createSelector(
    selectPersona,
    (state: personaState) => state.personaPorId
);