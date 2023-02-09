import { useContext } from "react";
import { TaskStructure } from "../../models/task";
import "./card.scss";
import { AppContext } from "../../../../core/context/app.context";

type CardProps = {
  task: TaskStructure;
};
export function Card({ task }: CardProps) {
  const { updateTask, deleteTask } = useContext(AppContext);

  return (
    <li className="card">
      <label>
        <input
          type="checkbox"
          name=""
          checked={task.isCompleted}
          onChange={() => {
            task.isCompleted = !task.isCompleted;
            updateTask(task);
          }}
        />
        <span title={task.id}>{task.name}</span>
      </label>
      <span>{task.owner}</span>
      <button
        onClick={() => {
          deleteTask(task.id);
        }}
      >
        🗑️
      </button>
    </li>
  );
}
