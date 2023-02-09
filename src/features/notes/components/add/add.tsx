import { SyntheticEvent, useContext } from "react";
import { ProtoNote } from "../../models/note";
import { NotesContext } from "../../context/notes.context";

export function Add() {
  const { addNote } = useContext(NotesContext);

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const inputs = form.querySelectorAll("input");
    const newNote = new ProtoNote(inputs[0].value, inputs[1].value);
    console.log(newNote);
    addNote(newNote);
  };

  return (
    <>
      <p>Add</p>
      <form className="add" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Describe la nota"
          required
        />
        <input type="text" name="author" placeholder="Autor de la nota" />
        <button type="submit">Añadir</button>
      </form>
    </>
  );
}
