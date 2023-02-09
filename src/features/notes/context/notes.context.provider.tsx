import { useNotes } from "../hooks/use.notes";
import { NoteApiRepo } from "../services/repository/note.api.repo";
import { NotesContext } from "./notes.context";

export function AppContextProvider({ children }: { children: JSX.Element }) {
  const notesRepo = new NoteApiRepo();

  const context = {
    ...useNotes(notesRepo),
  };

  return (
    <NotesContext.Provider value={context}>{children}</NotesContext.Provider>
  );
}
