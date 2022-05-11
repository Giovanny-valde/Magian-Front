import { createSelector } from "@ngrx/store";
import { comentarioState } from "src/app/core/models/comentario/comentario.state";
import { State } from "../app.state";

export const selectComentario = (state: State) => state.comentario;

export const selectComentarioList = createSelector(
    selectComentario,
    (state: comentarioState) => state.comentario
);

export const selectComentarioPorId = createSelector(
    selectComentario,
    (state: comentarioState) => state.comentarioPorId
);