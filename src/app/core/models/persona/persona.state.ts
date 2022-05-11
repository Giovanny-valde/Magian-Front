import { persona } from "./persona";

export interface personaState {
    persona: ReadonlyArray<persona>;
    personaPorId: persona;
  }