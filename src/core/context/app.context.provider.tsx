import { useTasks } from "../../features/todo/hooks/use.tasks";
import { AppContext } from "./app.context";

export function AppContextProvider({ children }: { children: JSX.Element }) {
  const context = useTasks();

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
