import { ProtoNote, NoteStructure } from "../models/note";

export const MOCK_NoteS: NoteStructure[] = [
  { id: "1", title: "Hacer algo", author: "Pepe", isImportant: true },
  { ...new ProtoNote("Otra cosa", "Luisa"), id: "2" },
  { ...new ProtoNote("Comer", "Todos"), id: "3" },
];
