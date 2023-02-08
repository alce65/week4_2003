import { useEffect } from "react";
import { Add } from "../add/add";
import { Card } from "../card/card";
import "./tasks.scss";
import { useTasks } from "../../hooks/use.tasks";

export function Tasks() {
  const { tasks, load, addTask, updateTask, deleteTask } = useTasks();

  useEffect(() => {
    load();
  }, [load]);

  return (
    <section className="tasks">
      <Add addTask={addTask}></Add>
      <p>Tasks</p>
      <ul>
        {tasks.map((item) => (
          <Card
            key={item.id}
            task={item}
            deleteTask={deleteTask}
            updateTask={updateTask}
          ></Card>
        ))}
      </ul>
    </section>
  );
}
