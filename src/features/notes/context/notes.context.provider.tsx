import { useMemo } from "react";
import { useNotes } from "../hooks/use.notes";
import { NoteApiRepo } from "../services/repository/note.api.repo";
import { NotesContext } from "./notes.context";

export function NotesContextProvider({ children }: { children: JSX.Element }) {
  console.log("Notes Context");
  const notesRepo = useMemo(() => new NoteApiRepo(), []);

  const context = {
    ...useNotes(notesRepo),
  };

  return (
    <NotesContext.Provider value={context}>{children}</NotesContext.Provider>
  );
}
