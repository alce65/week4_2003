import { ProtoTask, TaskStructure } from "../models/task";

export const MOCK_TASKS: TaskStructure[] = [
  { id: "1", name: "Hacer algo", owner: "Pepe", isCompleted: true },
  { ...new ProtoTask("Otra cosa", "Luisa"), id: "2" },
  { ...new ProtoTask("Comer", "Todos"), id: "3" },
];
