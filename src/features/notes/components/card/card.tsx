import { useContext } from "react";
import { NoteStructure } from "../../models/note";
import "./card.scss";
import { NotesContext } from "../../context/notes.context";

type CardProps = {
  note: NoteStructure;
};
export function Card({ note }: CardProps) {
  const { updateNote, deleteNote } = useContext(NotesContext);

  return (
    <li className="card">
      <label>
        <input
          type="checkbox"
          name=""
          checked={note.isImportant}
          onChange={() => {
            note.isImportant = !note.isImportant;
            updateNote(note);
          }}
        />
        <span title={note.id}>{note.title}</span>
      </label>
      <span>{note.author}</span>
      <button
        onClick={() => {
          deleteNote(note.id);
        }}
      >
        🗑️
      </button>
    </li>
  );
}
