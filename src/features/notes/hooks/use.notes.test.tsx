import { NoteApiRepo } from "../services/repository/note.api.repo";
import { useNotes } from "./use.notes";

const mockRepo = {
  getNote: jest.fn(),
  delete: jest.fn(),
} as unknown as NoteApiRepo;

const TestComponent = function () {
  const { notes, loadNotes, addNote, deleteNote, updateNote } =
    useNotes(mockRepo);

  return (
    <>
      <button onClick={() => loadNotes()}></button>
    </>
  );
};
