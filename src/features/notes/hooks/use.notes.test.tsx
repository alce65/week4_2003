import { NoteStructure, ProtoNoteStructure } from "../models/note";
import { NoteApiRepo } from "../services/repository/note.api.repo";
import { useNotes } from "./use.notes";

const mockRepo: NoteApiRepo = {
  url: "",
  loadNotes: jest.fn(),
  getNote: jest.fn(),
  createNote: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
};

const TestComponent = function () {
  const { notes, loadNotes, addNote, deleteNote, updateNote } =
    useNotes(mockRepo);

  return (
    <div>
      <p>Sample: {notes[0].title}</p>
      <button onClick={() => loadNotes()}></button>
      <button onClick={() => addNote({} as ProtoNoteStructure)}></button>
      <button onClick={() => updateNote({} as NoteStructure)}></button>
      <button onClick={() => deleteNote("1")}></button>
    </div>
  );
};
