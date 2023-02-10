import { useCallback, useReducer } from "react";
import { ProtoNoteStructure, NoteStructure } from "../models/note";
import { NoteApiRepo } from "../services/repository/note.api.repo";
import * as ac from "../reducer/notes.action.creators";

import { notesReducer } from "../reducer/notes.reducer";

export type UseNotesStructure = ReturnType<typeof useNotes>;
export function useNotes(repo: NoteApiRepo) {
  const initialState: NoteStructure[] = [];
  // Previous NO FLUX const [notes, setNotes] = useState(initialState);

  const [notes, dispatch] = useReducer(notesReducer, initialState);

  console.log("NOTES: ", notes);

  const handlerError = (error: Error) => {
    console.log(error.message);
  };

  const loadNotes = useCallback(async () => {
    try {
      const notes = await repo.loadNotes();
      // Previous NO FLUX setNotes(notes);
      dispatch(ac.loadNotesCreator(notes));
    } catch (error) {
      handlerError(error as Error);
    }
  }, [repo]);

  const addNote = async (note: ProtoNoteStructure) => {
    try {
      const finalNote = await repo.createNote(note);
      // Previous NO FLUX setNotes([...notes, finalNote]);
      dispatch(ac.addNotesCreator(finalNote));
    } catch (error) {
      handlerError(error as Error);
    }
  };

  const deleteNote = async (id: NoteStructure["id"]) => {
    try {
      await repo.delete(id);
      // Previous NO FLUX setNotes(notes.filter((item) => item.id !== id));
      dispatch(ac.deleteNotesCreator(id));
    } catch (error) {
      handlerError(error as Error);
    }
  };

  const updateNote = async (note: NoteStructure) => {
    try {
      const finalNote = await repo.update(note);
      // Previous NO FLUX setNotes(notes.map((item) => (item.id === note.id ? finalNote : item)));
      dispatch(ac.updateNotesCreator(finalNote));
    } catch (error) {
      handlerError(error as Error);
    }
  };

  return {
    notes,
    loadNotes,
    addNote,
    deleteNote,
    updateNote,
  };
}
