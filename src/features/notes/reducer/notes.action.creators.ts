import { NoteStructure } from "../models/note";
import { notesActions } from "./notes.actions";

interface Action {
  type: string;
  payload?: any;
}

export interface NotesAction extends Action {
  payload: NoteStructure | NoteStructure[] | NoteStructure["id"];
}

export const loadNotesCreator = (payload: NoteStructure[]): NotesAction => {
  return {
    type: notesActions.load,
    payload,
  };
};

export const addNotesCreator = (payload: NoteStructure) => {
  return {
    type: notesActions.add,
    payload,
  };
};

export const updateNotesCreator = (payload: NoteStructure) => {
  return {
    type: notesActions.update,
    payload,
  };
};

export const deleteNotesCreator = (payload: NoteStructure["id"]) => {
  return {
    type: notesActions.delete,
    payload,
  };
};
