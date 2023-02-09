import { TaskApiRepo } from "../services/repository/task.api.repo";
import { useTasks } from "./use.tasks";

TaskApiRepo.prototype.getTask = jest.fn();
TaskApiRepo.prototype.delete = jest.fn();

const TestComponent = function () {
  const { tasks, load, addTask, deleteTask, updateTask } = useTasks();

  return (
    <>
      <button onClick={() => load()}></button>
    </>
  );
};
