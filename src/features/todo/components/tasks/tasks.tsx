import { useContext } from "react";
import { Add } from "../add/add";
import { Card } from "../card/card";
import "./tasks.scss";
import { AppContext } from "../../../../core/context/app.context";

export function Tasks() {
  const { tasks } = useContext(AppContext);

  return (
    <section className="tasks">
      <Add></Add>
      <p>Tasks</p>
      <ul>
        {tasks.map((item) => (
          <Card key={item.id} task={item}></Card>
        ))}
      </ul>
    </section>
  );
}
