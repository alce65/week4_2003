import { TaskApiRepo } from "../services/repository/task.api.repo";
import { useTasks } from "./use.tasks";

const mockRepo = {
  getTask: jest.fn(),
  delete: jest.fn(),
} as unknown as TaskApiRepo;

const TestComponent = function () {
  const { tasks, loadTasks, addTask, deleteTask, updateTask } =
    useTasks(mockRepo);

  return (
    <>
      <button onClick={() => loadTasks()}></button>
    </>
  );
};
