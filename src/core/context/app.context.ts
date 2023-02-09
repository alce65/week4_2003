import { createContext } from "react";
import { UseTasksStructure } from "../../features/todo/hooks/use.tasks";

export const AppContext = createContext({} as UseTasksStructure);
