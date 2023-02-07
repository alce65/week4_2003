import { SyntheticEvent } from "react";
import { ProtoTask, ProtoTaskStructure } from "../../models/task";

type AddProps = {
  addTask: (task: ProtoTaskStructure) => void;
};
export function Add({ addTask }: AddProps) {
  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const inputs = form.querySelectorAll("input");
    const newTask = new ProtoTask(inputs[0].value, inputs[1].value);
    console.log(newTask);
    addTask(newTask);
  };

  return (
    <>
      <p>Add</p>
      <form className="add" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Describe la tarea"
          required
        />
        <input type="text" name="owner" placeholder="Responsable de la tarea" />
        <button type="submit">Añadir</button>
      </form>
    </>
  );
}
