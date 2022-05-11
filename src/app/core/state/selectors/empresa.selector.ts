import { createSelector } from "@ngrx/store";
import { empresaState } from "src/app/core/models/empresa/empresa.state";
import { State } from "../app.state";

export const selectEmpresa = (state: State) => state.empresa;

export const selectEmpresaList = createSelector(
    selectEmpresa,
    (state: empresaState) => state.empresa
);

export const selectEmpresaPorId = createSelector(
    selectEmpresa,
    (state: empresaState) => state.empresaPorId
);

export const selectIdEmpresa = createSelector(
    selectEmpresa,
    (state: empresaState) => state.idEmpresa
);