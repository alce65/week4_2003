import { createContext } from "react";
import { useTasks } from "../../features/todo/hooks/use.tasks";

type UseTasksType = ReturnType<typeof useTasks>;
export const AppContext = createContext({} as UseTasksType);
