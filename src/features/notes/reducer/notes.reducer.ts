import { NoteStructure } from "../models/note";
import { NotesAction } from "./notes.action.creators";
import { notesActions } from "./notes.actions";

// Una función pura
// - no modifica ni depende de nada externo
// - con unos argumentos dados siempre devuelve lo mismo
// que
// recibe un estado + una acción
// devuelve un nuevo estado

export function notesReducer(
  state: NoteStructure[],
  action: NotesAction
): NoteStructure[] {
  switch (action.type) {
    case notesActions.load:
      return action.payload as NoteStructure[];
    case notesActions.add:
      return [...state, action.payload as NoteStructure];
    case notesActions.update:
      const payload = action.payload as NoteStructure;
      return state.map((item) => (item.id === payload.id ? payload : item));
    case notesActions.delete:
      const id = action.payload as NoteStructure["id"];
      return state.filter((item) => item.id !== id);
    default:
      return state;
  }
}
