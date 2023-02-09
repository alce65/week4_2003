import { useState, useCallback } from "react";
import { ProtoNoteStructure, NoteStructure } from "../models/note";
import { NoteApiRepo } from "../services/repository/note.api.repo";

export type UseNotesStructure = ReturnType<typeof useNotes>;
export function useNotes(repo: NoteApiRepo) {
  const initialState: NoteStructure[] = [];
  const [notes, setNotes] = useState(initialState);

  console.log("NOTES: ", notes);

  const handlerError = (error: Error) => {
    console.log(error.message);
  };

  const loadNotes = useCallback(async () => {
    try {
      const notes = await repo.loadNotes();
      setNotes(notes);
    } catch (error) {
      handlerError(error as Error);
    }
  }, [repo]);

  const addNote = async (note: ProtoNoteStructure) => {
    try {
      const finalNote = await repo.createNote(note);
      setNotes([...notes, finalNote]);
    } catch (error) {
      handlerError(error as Error);
    }
  };

  const deleteNote = async (id: NoteStructure["id"]) => {
    try {
      await repo.delete(id);
      setNotes(notes.filter((item) => item.id !== id));
    } catch (error) {
      handlerError(error as Error);
    }
  };

  const updateNote = async (note: NoteStructure) => {
    try {
      const finalNote = await repo.update(note);
      setNotes(notes.map((item) => (item.id === note.id ? finalNote : item)));
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
