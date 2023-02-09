import { useMemo } from "react";
import { useTasks } from "../../features/todo/hooks/use.tasks";
import { TaskApiRepo } from "../../features/todo/services/repository/task.api.repo";
import { AppContext } from "./app.context";

export function AppContextProvider({ children }: { children: JSX.Element }) {
  const tasksRepo = useMemo(() => new TaskApiRepo(), []);
  const context = useTasks(tasksRepo);

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
